// hooks.ts
import {Before, BeforeAll, AfterAll, After, Status} from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, Page } from 'playwright';
import getEnvConfig from './config/environments';
import * as path from "node:path";

let browser: Browser | null = null;
export let page: Page | null = null; // Declare page globally and export it

const envConfig = getEnvConfig();
const runMode = (process.env.RUN_MODE || 'ui').toLowerCase(); // Changed TEST_TYPE to RUN_MODE as per your latest
const headless = process.env.HEADLESS === 'true';
const browserType = (process.env.BROWSER || 'chromium').toLowerCase(); // Default to chromium

// Map browser types to Playwright instances
const browserMap: { [key: string]: typeof chromium } = {
    chromium,
    firefox,
    webkit
};

BeforeAll(async () => {
    console.log(`Starting ${runMode} tests in ${process.env.ENV || 'qa'} for ${process.env.BRAND || 'brand1'}...`);
    if (runMode === 'ui') {
        const selectedBrowser = browserMap[browserType] || chromium; // Default to chromium if invalid
        console.log(`Launching ${browserType} browser with headless=${headless}`);
        browser = await selectedBrowser.launch({ headless });
    }
});

Before(async function () {
    if (runMode === 'ui' && browser) {
        const context = await browser.newContext({
            baseURL: envConfig.url
        });
        page = await context.newPage();
    }
    this.envConfig = envConfig;
});

After(async function (scenario) {
    const status = scenario.result?.status; // Type inferred as Status | undefined
    const statusesToCapture = [Status.FAILED, Status.UNDEFINED, Status.SKIPPED];
    if (runMode === 'ui' && page) {
        if (status && statusesToCapture.includes(status)) { // No cast needed
            const screenshotName = scenario.pickle.name.replace(/\s+/g, '-');
            const screenshotPath = path.resolve(__dirname, 'reports', `screenshot-${screenshotName}.png`);
            try {
                const screenshot = await page.screenshot({ path: screenshotPath });
                this.attach(screenshot, 'image/png');
                console.log(`Screenshot saved: ${screenshotPath} for status: ${status}`);
            } catch (error) {
                console.error(`Failed to save screenshot for ${scenario.pickle.name}:`, error);
            }
        }
    }
});

AfterAll(async () => {
    if (runMode === 'ui' && browser) {
        console.log(`Closing ${browserType} browser...`);
        await browser.close();
        page = null; // Reset page after cleanup
    }
});
