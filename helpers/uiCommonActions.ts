// helpers/uiCommonActions.ts
import { Page, ElementHandle } from 'playwright';
import getEnvConfig from '../config/environments';
import {page} from "../hooks";
import * as path from "node:path";
import * as fs from "node:fs";

const envConfig = getEnvConfig();

/**
 * @summary UI helper methods for common Playwright actions.
 * @author Tanveer Khan <tanveermujtaba.khan@gmail.com>
 */
const uiCommonActions = {
    /**
     * @summary Navigates to a page.
     * @param {Page} page - The Playwright page object.
     * @param {string} [path] - Optional path to append to the base URL.
     */
    async launchUrl(page: Page): Promise<void> {
        try {
            const timeout = process.env.APP_LOAD_TIMEOUT
                ? parseInt(process.env.APP_LOAD_TIMEOUT)
                : 3000;
            const url = `${envConfig.url}`;
            console.log(`Navigating to URL: ${url}`);
            await page.goto(url, { timeout });
        } catch (error) {
            console.error('Failed to load page:', (error as Error).message);
            throw new Error(`Failed to load page: ${(error as Error).message}`);
        }
    },

    /**
     * @summary Clicks an element on the page.
     * @param {Page} page - The Playwright page object.
     * @param {string} selector - The CSS selector of the element to click.
     */
    async clickElement(page: Page, selector: string): Promise<void> {
        try {
            await page.click(selector, { timeout: 5000 });
            console.log(`Clicked element: ${selector}`);
        } catch (error) {
            console.error(`Failed to click element ${selector}:`, (error as Error).message);
            throw new Error(`Failed to click element: ${(error as Error).message}`);
        }
    },

    /**
     * @summary Fills an input field with a value.
     * @param {Page} page - The Playwright page object.
     * @param {string} selector - The CSS selector of the input field.
     * @param {string} value - The value to fill in.
     */
    async fillInput(page: Page, selector: string, value: string): Promise<void> {
        try {
            await page.fill(selector, value, { timeout: 5000 });
            console.log(`Filled input ${selector} with value: ${value}`);
        } catch (error) {
            console.error(`Failed to fill input ${selector}:`, (error as Error).message);
            throw new Error(`Failed to fill input: ${(error as Error).message}`);
        }
    },

    /**
     * @summary Waits for an element to be visible.
     * @param {Page} page - The Playwright page object.
     * @param {string} selector - The CSS selector of the element to wait for.
     */
    async waitForElement(page: Page, selector: string): Promise<ElementHandle> {
        try {
            const element = await page.waitForSelector(selector, { state: 'visible', timeout: 10000 });
            console.log(`Element ${selector} is visible`);
            return element;
        } catch (error) {
            console.error(`Failed to wait for element ${selector}:`, (error as Error).message);
            throw new Error(`Failed to wait for element: ${(error as Error).message}`);
        }
    },

    /**
     * @summary Fetches language-specific data based on the LANGUAGE environment variable.
     * @returns {object} The parsed JSON data for the selected language.
     */
    getLanguageData(): object {
        const language = (process.env.LANGUAGE || 'english').toLowerCase();
        const languageMap: { [key: string]: string } = {
            english: 'en.json',
            french: 'ar.json'
        };
        const fileName = languageMap[language] || 'en.json'; // Default to English
        const filePath = path.resolve(__dirname, '../../language-constants', fileName);

        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`Failed to load language file ${fileName}:`, (error as Error).message);
            throw new Error(`Failed to load language file: ${(error as Error).message}`);
        }
    }
};

export default uiCommonActions;