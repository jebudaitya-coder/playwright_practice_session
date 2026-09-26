import {test, page, expect, request} from '@playwright/test'
const loginPayLoad = {userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto"}
const OrderPayLoad = {orders:[{country:"United States",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let loginToken;
let orderId;
const loginUrl = "https://rahulshettyacademy.com/api/ecom/auth/login";
const clientHomePageUrl = 'https://rahulshettyacademy.com/client/';
const createOrderAPIEndPoint = 'https://rahulshettyacademy.com/api/ecom/order/create-order'

test.beforeAll(async() => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(loginUrl,{
        data: loginPayLoad
    })
    expect (loginResponse.ok()).toBeTruthy();
    const jsonResponse = await loginResponse.json();
    loginToken = jsonResponse.token

    //create an order
    const createOrderResponse = await apiContext.post(createOrderAPIEndPoint,{
        data: OrderPayLoad,
        headers: {
            "Authorization": loginToken,
            "Content-Type": "application/json"
        }
    })
    const orderResponseJson = await createOrderResponse.json();
    orderId = orderResponseJson.orders[0];
   
})

test.beforeEach(() => {

});

test('test1', async({page}) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, loginToken)
    await page.goto(clientHomePageUrl)
    await page.locator('#products').first().waitFor();
    await page.getByRole('button',{name:'  ORDERS'}).click();
    
    await page.locator('tbody').waitFor();
    const rows = await page.locator("tbody tr");

    for(let i=0; i<await rows.count(); i++){
        await rows.nth(i).locator("button").first().click();
        break;
    }
})