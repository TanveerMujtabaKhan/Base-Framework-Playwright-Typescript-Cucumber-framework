// Get RUN_MODE and BRAND from environment
const runMode = (process.env.RUN_MODE || 'ui').toLowerCase();
const brand = (process.env.BRAND || 'brand1').toLowerCase();

// Validate RUN_MODE and BRAND
if (!['ui', 'api'].includes(runMode)) {
    throw new Error(`Invalid RUN_MODE: ${runMode}. Must be 'ui' or 'api'.`);
}
if (!['brand1', 'brand2'].includes(brand)) {
    throw new Error(`Invalid BRAND: ${brand}. Must be 'brand1' or 'brand2'.`);
}

// Base configuration function
const getConfig = (tag) => ({
    requireModule: ['ts-node/register'],
    require: [
        'hooks.ts',
        `brands/${brand}/**/${runMode}/step-definitions/*.steps.ts` // Dynamic brand and mode
    ],
    paths: [`brands/${brand}/**/${runMode}/features/*.feature`], // Dynamic brand and mode
    format: ['summary', '@cucumber/pretty-formatter', 'json:reports/cucumber-report.json'],
    strict: true, // Don't allow undefined/pending steps
    tags: tag     // Specific tag (e.g., '@smoke')
});

// Define profiles for each test type only
module.exports = {
    default: getConfig('@smoke'), // Reuse getConfig for default
    smoke: getConfig('@smoke'),
    regression: getConfig('@regression'),
    sanity: getConfig('@sanity'),
    functional: getConfig('@functional')
};