#Playwright-Typescript-Cucumber-framework
Overview
The "Playwright-Typescript-Cucumber-framework" is a robust test automation framework leveraging Playwright, TypeScript, and Cucumber to validate UI and API functionalities across multiple brands such as brand1 and brand2. Built with a Behavior-Driven Development (BDD) approach, it ensures test cases are readable, maintainable, and aligned with business requirements, supporting desktop testing with extensibility for mobile scenarios.

Features
Multi-Brand Support: Modular testing for brands like brand1 and brand2.
UI and API Testing: Integrates Playwright for browser automation and supports API validation.
Localization: Validates UI in English, French, and Chinese.
Dynamic Configuration: Uses environment variables (ENV, BRAND) for flexible test runs.
Comprehensive Reporting: Generates HTML reports with screenshots for failed, undefined, or skipped steps.
Scalability: Efficient for large test suites (e.g., 1000 cases) with minimal performance impact.
Folder Structure
brands/: Contains brand-specific test assets (e.g., brand1, brand2):
onboarding/: Functionality-specific tests, split into:
ui/:
features/: Gherkin test scenarios (e.g., login.feature).
step-definitions/: TypeScript step implementations (e.g., login.steps.ts).
pages/: Page objects for UI (e.g., login.ts).
testData/: Test inputs (e.g., users.json).
api/: Similar structure for API tests.
config/: Environment settings (e.g., environments.ts).
helpers/: Utility functions (e.g., uiCommonActions.ts).
language-constants/: Localization files (e.g., en.json, fr.json, zh.json).
reports/: Test outputs (e.g., cucumber-report.html, screenshots).
hooks.ts: Test lifecycle management (setup, teardown, screenshots).
generate-report.ts: HTML report generation.
cucumber.js: Cucumber test configuration.
package.json: Dependencies and scripts.
Prerequisites
Node.js: v16.x or higher.
npm: v8.x or higher.
Playwright: Installed browsers (Chromium, Firefox, Webkit).
Setup
Clone the Repository:
bash
Wrap
Copy
git clone <repository-url>
cd Playwright-Typescript-Cucumber-framework
Install Dependencies:
bash
Wrap
Copy
npm install
Install Playwright Browsers:
bash
Wrap
Copy
npx playwright install
Usage
Run tests using predefined scripts in package.json. Examples:

UI Smoke Tests for brand1 in QA:
bash
Wrap
Copy
npm run test:qa:brand1:ui:smoke
Environment: QA, Brand: brand1, Mode: UI, Language: English.
API Smoke Tests for brand1:
bash
Wrap
Copy
npm run test:qa:brand1:api:smoke
Custom Browser (e.g., Webkit):
bash
Wrap
Copy
ENV=qa BRAND=brand1 HEADLESS=false BROWSER=webkit RUN_MODE=ui npm run test:qa:brand1:ui:smoke
Output
Console logs show test progress (summary, pretty format).
Reports (cucumber-report.html, screenshots) are saved in reports/ and auto-open post-run.
Adding New Tests
Feature File: Add a .feature file in brands/<brand>/<functionality>/<ui|api>/features/.
Step Definitions: Implement steps in brands/<brand>/<functionality>/<ui|api>/step-definitions/.
Page Objects: For UI, update pages/ (e.g., login.ts).
Test Data: Add to testData/ (e.g., users.json).
Reporting
Generated Files:
cucumber-report.json: Raw test results.
cucumber-report.html: Detailed HTML report with screenshots.
Access: Open reports/cucumber-report.html in a browser after a test run.
Performance
For 1000 test cases, Cucumber’s overhead (e.g., ~14 seconds for step matching) is negligible compared to Playwright’s execution time (e.g., 2.78 hours for UI tests), ensuring scalability with parallel execution capabilities.

Contributing
Guidelines: Update README.md with new scripts or features.
Process: Fork, branch, commit, and submit a pull request.
Troubleshooting
Missing Browsers: Run npx playwright install.
Report Not Generating: Ensure generate-report.ts runs (check script chaining with ;).
