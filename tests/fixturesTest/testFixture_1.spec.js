import {test,page,expect} from '@playwright/test'
import {authenticatedPage, customTest} from '../utils/fixture_utils/fixtures.js'

customTest("test your 1st fixture", async({authenticatedPage, createOrder})=>{
    await authenticatedPage.goto('https://rahulshettyacademy.com/client');
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
})