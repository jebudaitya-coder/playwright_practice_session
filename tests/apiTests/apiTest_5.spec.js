const { test, expect, request } = require('@playwright/test');
const { apiUtils } = require('../utils/api_utils/apiUtils.js');
const loginPayLoad = { userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto" }
const orderPayLoad = { orders: [{ country: "United States", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const routingUrl = "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*"
const hackOrderDetails = "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6"
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
    await page.locator("button[routerlink*='myorders']").click();

    await page.route(routingUrl, route => route.continue({url:hackOrderDetails}));
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
});