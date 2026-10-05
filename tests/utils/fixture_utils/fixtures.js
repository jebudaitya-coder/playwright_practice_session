//const base = require('@playwright/test');
import {test as base} from '@playwright/test'

exports.customTest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await page.getByPlaceholder('email@example.com').fill('jebudaitya@gmail.com');
        await page.getByPlaceholder('enter your passsword').fill('Jebu&357@uto');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.locator('div>h5>b').first().waitFor();
        await use(page);
        await context.close();
    }
});