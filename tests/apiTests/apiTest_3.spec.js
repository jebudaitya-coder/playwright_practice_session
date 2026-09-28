const {test, expect, request} = require('@playwright/test');
const {apiUtils} = require('../utils/api_utils/apiUtils.js');
const loginPayLoad = {userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto"}
const orderPayLoad = {orders:[{country:"United States",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
 
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtility = new apiUtils(apiContext,loginPayLoad);
   response =  await apiUtility.createOrder(orderPayLoad);
 
})
 
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
 
 
for(let i =0; i<await rows.count(); ++i)
{
   const rowOrderId =await rows.nth(i).locator("th").textContent();
   if (response.orderId.includes(rowOrderId))
   {
       await rows.nth(i).locator("button").first().click();
       break;
   }
}
const orderIdDetails =await page.locator(".col-text").textContent();
//await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});