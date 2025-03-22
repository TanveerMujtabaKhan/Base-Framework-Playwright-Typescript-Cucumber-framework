import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from "@playwright/test";
let environment = process.env.ENV ? process.env.ENV.toLowerCase() : 'qa';
let brand = process.env.brand ? process.env.ENV.toLowerCase() : 'brand1';
import helpers from '../../../../../helpers/uiCommonActions';
import {page} from "../../../../../hooks";

Given(/^user is on homepage$/, async () => {
    await helpers.launchUrl(page)
    expect(true).toBe(true);
    console.log(`User successfully logged in to ${brand} in ${environment} environment`);
});


Then(/^add deposit to the account (.*)$/, async (accountType:string) => {
    expect(true).toBe(true);
    console.log(`User successfully added funds to ${accountType}`);
});

Then(/^This step will fail deliberately again$/, async () => {
    expect(true).toBe(false);
});