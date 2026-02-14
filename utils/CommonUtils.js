import { expect } from '@playwright/test';


export class CommonUtils {
    /**
     * Generates a unique email using the current timestamp.
     * @param {string} baseName - The prefix for the email (e.g., 'testuser')
     * @returns {string} - A unique email string
     */
    static generateRandomEmail(baseName = 'Testuser') {
        const timestamp = Date.now();
        return `${baseName}_${timestamp}@test.com`;
    }

    /**
     * Generates a random number between a min and max range.
     */
    static getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static async verifyTextVisibility(page,text){
        await page.getByText(text).waitFor({state:'visible'});
        await expect(page.getByText(text)).toBeVisible();
    }

     static async clickButtonWithName(buttonName,page){
        await page.getByRole('button',{name:buttonName}).click();
    }

    static async clickLinkWithName(page,linkName){
        await page.getByRole('link', { name: linkName }).click();
    }
    static async clickLinkWithNameRegex(page, link) {
        await page.getByRole('link', { name: new RegExp(link) }).click();
    }
}

