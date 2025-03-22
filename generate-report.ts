// generate-report.ts
import * as cucumberHtmlReporter from 'cucumber-html-reporter';

const options: cucumberHtmlReporter.Options = {
    theme: 'bootstrap',                    // Report theme (bootstrap, hierarchy, etc.)
    jsonFile: 'reports/cucumber-report.json', // Input JSON file
    output: 'reports/cucumber-report.html',   // Output HTML file
    reportSuiteAsScenarios: true,          // Treat each scenario as a suite
    scenarioTimestamp: true,               // Add timestamps to scenarios
    launchReport: true,                    // Auto-open report in browser
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": process.env.ENV || "qa",
        "Brand": process.env.BRAND || "brand1",
        "Run Mode": process.env.RUN_MODE || "ui",
        "Language": process.env.LANGUAGE || "english",
        "Browser": process.env.BROWSER || "chromium"
    }
};

cucumberHtmlReporter.generate(options);