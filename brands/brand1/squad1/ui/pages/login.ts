// brands/brand1/squad1/ui/pages/login.ts
import { Page } from 'playwright';
import uiCommonActions from '../../../../../helpers/uiCommonActions';
import {expect} from "@playwright/test";

export class LoginPage {
    private page: Page;
    private languageData: object;

    constructor(page: Page) {
        this.page = page;
        this.languageData = uiCommonActions.getLanguageData(); // Load language data
    }

    async validateTitle() {
        const expectedTitle = (this.languageData as any).createAccountHeader;
        const actualTitle = await this.page.title();
        if (actualTitle !== expectedTitle) {
            throw new Error(`Title mismatch: expected "${expectedTitle}", got "${actualTitle}"`);
        }
        expect(expectedTitle).toBe(actualTitle);
        console.log(`Validated title: ${actualTitle}`);
    }

    async validateUsernameLabel() {
        const expectedLabel = (this.languageData as any).login_page.username_label;
        const actualLabel = await this.page.textContent('#username-label');
        if (actualLabel !== expectedLabel) {
            throw new Error(`Username label mismatch: expected "${expectedLabel}", got "${actualLabel}"`);
        }
        console.log(`Validated username label: ${actualLabel}`);
    }
}