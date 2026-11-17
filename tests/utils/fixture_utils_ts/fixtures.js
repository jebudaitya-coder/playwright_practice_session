//const base = require('@playwright/test');
import {request, test as base} from '@playwright/test'
import { apiUtils } from '../api_utils/apiUtils';

const loginPayLoad = { userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto" };
const orderPayLoad = { orders: [{ country: "United States", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

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
    },
    createOrder: async ({ }, use) => {
        const apiContext = await request.newContext();
        const apiUtility = new apiUtils(apiContext, loginPayLoad);
        const response = await apiUtility.createOrder(orderPayLoad);
        await use(response);
    }
});