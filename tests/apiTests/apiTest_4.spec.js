const { test, expect, request } = require('@playwright/test');
const { apiUtils } = require('../utils/api_utils/apiUtils.js');
const loginPayLoad = { userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto" }
const orderPayLoad = { orders: [{ country: "United States", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const routingUrl = "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
const noOrderResponse = { data: [], message: "No Orders" };
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtility = new apiUtils(apiContext, loginPayLoad);
    response = await apiUtility.createOrder(orderPayLoad);

})

test('Intercept API Response', async ({ page }) => {
    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");

    await page.route(routingUrl, async route => {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(noOrderResponse);
        route.fulfill({
            response,
            body,
        });
    });

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse(routingUrl);
    console.log(await page.locator(".mt-4").textContent());
});