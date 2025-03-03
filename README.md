# Playwright-Typescript-Cucumber-Framework

## Overview

The **Playwright-Typescript-Cucumber-Framework** is a robust test automation framework that leverages **Playwright**, **TypeScript**, and **Cucumber** to validate both **UI** and **API** functionalities across multiple brands such as **brand1** and **brand2**. 

Built with a **Behavior-Driven Development (BDD)** approach, the framework ensures that test cases are **readable, maintainable**, and aligned with **business requirements**, supporting **desktop testing** with potential extensibility for mobile scenarios.

---

## Features

- **Multi-Brand Support**: Modular structure to support testing across different brands, like **brand1** and **brand2**.
- **UI and API Testing**: Combines Playwright's browser automation with API validation capabilities.
- **Localization Support**: Ensures UI validation across **English**, **French**, and **Chinese** locales.
- **Dynamic Configuration**: Supports **environment-based test execution** using variables like `ENV` and `BRAND`.
- **Comprehensive Reporting**: Generates **detailed HTML reports** with screenshots for failed, undefined, and skipped steps.
- **Scalability**: Optimized to efficiently handle **large test suites (1000+ test cases)** with minimal performance overhead.

---

## Folder Structure

```plaintext
brands/
    brand1/
        onboarding/
            ui/
                features/           # Gherkin feature files (e.g., login.feature)
                step-definitions/   # Step definitions in TypeScript (e.g., login.steps.ts)
                pages/              # Page objects (e.g., login.ts)
                testData/           # Test data files (e.g., users.json)
            api/
                features/
                step-definitions/
                testData/

config/                             # Environment configurations (environments.ts)
helpers/                            # Common utilities (uiCommonActions.ts)
language-constants/                 # Localization files (en.json, fr.json, zh.json)
reports/                            # Output folder for HTML reports and screenshots
hooks.ts                            # Lifecycle hooks (setup, teardown, screenshots)
generate-report.ts                  # Script for generating HTML report
cucumber.js                         # Cucumber configuration
package.json                        # Project dependencies and scripts plaintext ```

---

## ** Prerequisites **
- **Node.js** version 16 or higher.
- **npm** version 8 or higher.
- **Playwright Browsers installed** (Chromium, Firefox, Webkit).

Install Playwright browsers via:
```bash
npx playwright install

## Setup
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd Playwright-Typescript-Cucumber-framework
    ```
2. Install **Node.js** (16+) if not already installed.
3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

---

## Install Dependencies
To install all project dependencies, run:
```bash
npm install

## Folder Structure

Run tests using predefined scripts in `package.json`.

### Example Commands

- **Run UI Smoke Tests for `brand1` in `QA` environment:**
    ```bash
    npm run test:qa:brand1:ui:smoke
    ```
    - Environment: QA
    - Brand: brand1
    - Mode: UI
    - Language: English (default)

- **Run API Smoke Tests for `brand1`:**
    ```bash
    npm run test:qa:brand1:api:smoke
    ```

- **Run UI Tests with Custom Browser (e.g., Webkit) in non-headless mode:**
    ```bash
    ENV=qa BRAND=brand1 HEADLESS=false BROWSER=webkit RUN_MODE=ui npm run test:qa:brand1:ui:smoke
    ```

---

## Output
- Console logs provide a **pretty summary** of test execution progress.
- Test artifacts (reports and screenshots) are saved in the `reports/` directory.
- **cucumber-report.html** automatically opens in your browser post-execution.

### Reports Directory Includes:
| File | Description |
| --- | --- |
| `cucumber-report.json` | Raw test results in JSON format |
| `cucumber-report.html` | Full HTML report with screenshots |
| `screenshots/` | Screenshots captured for failed/undefined/skipped steps |

## Reporting
### Reports Overview
The framework automatically generates detailed reports after test execution.

| Report | Description |
| --- | --- |
| `cucumber-report.json` | Raw execution results in JSON format |
| `cucumber-report.html` | HTML report with step-by-step details and screenshots |
| `screenshots/` | Failure screenshots (captured for each failed step) |

### Accessing Reports
After test execution, open:
reports/cucumber-report.html

in any browser to review test results.
