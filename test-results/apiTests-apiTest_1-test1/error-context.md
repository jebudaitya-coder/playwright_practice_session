# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\apiTest_1.spec.js >> test1
- Location: tests\apiTests\apiTest_1.spec.js:20:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div li').last() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | import {test, page, expect, request} from '@playwright/test'
  2  | const loginPayLoad = {userEmail: "jebudaitya@gmail.com", userPassword: "Jebu&357@uto"}
  3  | let loginToken;
  4  | 
  5  | test.beforeAll(async() => {
  6  |     const apiContext = await request.newContext();
  7  |     const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
  8  |         data: loginPayLoad
  9  |     })
  10 |     expect (loginResponse.ok()).toBeTruthy();
  11 |     const jsonResponse = await loginResponse.json();
  12 |     loginToken = jsonResponse.token
  13 |     //console.log(loginToken)
  14 | })
  15 | 
  16 | test.beforeEach(() => {
  17 | 
  18 | });
  19 | 
  20 | test('test1', async({page}) => {
  21 |     await page.addInitScript(value => {
  22 |         window.localStorage.setItem('token', value);
  23 |     }, loginToken)
  24 |     await page.goto('https://rahulshettyacademy.com/client/')
  25 |     await page.waitForLoadState('networkidle');
  26 |     //save the list of items into an array to iterate sequentially to add the specific item into the cart
  27 |     const ItemToChoose = 'iphone 13 pro';
  28 |     const ListOfItems = await page.locator('.card-body');
  29 |     await ListOfItems.first().waitFor();
  30 |     const NumberOfItems = await ListOfItems.count();
  31 |     console.log("number of items on this page: " + NumberOfItems);
  32 | 
  33 |     for (let i = 0; i < NumberOfItems; i++) {
  34 |         if(await ListOfItems.nth(i).locator('b').textContent() === ItemToChoose){
  35 |             await ListOfItems.nth(i).locator('text =  Add To Cart').click();
  36 |             break;
  37 |         }
  38 |     }
  39 | 
  40 |     const ClickOnCart = page.locator("[routerlink*='cart']");
  41 |     await ClickOnCart.click();
> 42 |     await page.locator("div li").last().waitFor();
     |                                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  43 |     const ItemCheckOnCheckOutPage = await page.locator('h3:has-text("iphone 13 pro")').isVisible();
  44 |     expect (ItemCheckOnCheckOutPage).toBeTruthy;
  45 |     //await page.getByRole('button', { name: 'Checkout' }).click();
  46 |     await page.locator('button[type="button"]').nth(1).click();
  47 |     await expect (page.getByText(' Payment Method ')).toBeVisible();
  48 |     await page.locator('input[type="text"]').nth(1).fill('123');
  49 |     await page.locator('input[type="text"]').nth(2).fill('phanindra chandraprakash');
  50 |     await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
  51 |     await page.locator('button[type="submit"]').click();
  52 |     await expect (page.getByText('* Coupon Applied')).toBeVisible();
  53 |     const CouponText = await page.locator('p[style*="green"]').textContent();
  54 |     console.log(CouponText);
  55 |     await page.getByPlaceholder('Select Country').pressSequentially('united s', { delay: 150 });
  56 |     const CountryDropdown = await page.locator('.ta-results')
  57 |     await CountryDropdown.waitFor();
  58 |     const CountryOptions = await CountryDropdown.locator('button').count();
  59 |     for (let i = 0; i < CountryOptions; i++) {
  60 |         const text = await CountryDropdown.locator('button').nth(i).textContent();
  61 |         console.log(text);
  62 |         if(text === " United States"){
  63 |             await CountryDropdown.locator('button').nth(i).click();
  64 |             break; 
  65 |         }
  66 |     }
  67 |     //await page.locator('.ta-results > button').nth(0).click();
  68 |     await page.locator('a[class*="btnn"]').click();
  69 | 
  70 |     //const ItemCheckOnOrdersPage = await page.locator('td:has-text("iphone 13 pro")').isVisible();
  71 |     await expect (page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  72 |     const orderid = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
  73 |     const firstPass = orderid.replace("| ",""); //| 6aab01e552cfef03ed0f82c7 |
  74 |     const secondPass = firstPass.replace(" |","");
  75 |     const finalOrderId = secondPass.trim();
  76 |     console.log('final order id: ' + finalOrderId);
  77 |     await page.getByRole('button', { name: '  ORDERS' }).click();
  78 |     await page.getByText('Your Orders').waitFor();
  79 |     const listOfOrders = await page.locator('tbody')
  80 |     listOfOrders.waitFor();
  81 |     const countOfOrders = await page.locator('tbody tr').count();
  82 |     console.log("num check_1 = " + countOfOrders);
  83 | 
  84 |     for (let i = 0; i < countOfOrders; i++) {
  85 |         const getOrderId = await listOfOrders.locator('tr').nth(i).locator('th').first().textContent();
  86 |         console.log("orderid is: "+ getOrderId)
  87 | 
  88 |         if (getOrderId === finalOrderId){
  89 |             await listOfOrders.locator('tr').nth(i).locator('td').nth(4).locator('button').first().click();
  90 |             break;
  91 |         }
  92 |     }
  93 |     
  94 |     const text1 = await page.locator('//p[@class="tagline"]').textContent();
  95 |     console.log(text1);
  96 | })
```