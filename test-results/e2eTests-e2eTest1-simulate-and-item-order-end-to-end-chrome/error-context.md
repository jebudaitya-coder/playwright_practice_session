# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2eTests\e2eTest1.spec.js >> simulate and item order end to end
- Location: tests\e2eTests\e2eTest1.spec.js:3:5

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
  1  | import {test, page, browser, expect} from '@playwright/test'
  2  | 
  3  | test('simulate and item order end to end', async({page}) => {
  4  |     //launch the url and login with valid credentials
  5  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  6  |     const UN = 'jebudaitya@gmail.com';
  7  |     const PWD = 'Jebu&357@uto';
  8  |     const UserName = page.locator('#userEmail');
  9  |     const Password = page.locator('#userPassword');
  10 |     const LoginButton = page.locator('#login');
  11 |     await UserName.fill(UN);
  12 |     await Password.fill(PWD);
  13 |     await LoginButton.click();
  14 |     await page.waitForLoadState('networkidle');
  15 |     //save the list of items into an array to iterate sequentially to add the specific item into the cart
  16 |     const ItemToChoose = 'iphone 13 pro';
  17 |     const ListOfItems = await page.locator('.card-body');
  18 |     await ListOfItems.first().waitFor();
  19 |     const NumberOfItems = await ListOfItems.count();
  20 |     console.log("number of items on this page: " + NumberOfItems);
  21 | 
  22 |     for (let i = 0; i < NumberOfItems; i++) {
  23 |         if(await ListOfItems.nth(i).locator('b').textContent() === ItemToChoose){
  24 |             await ListOfItems.nth(i).locator('text =  Add To Cart').click();
  25 |             break;
  26 |         }
  27 |     }
  28 | 
  29 |     const ClickOnCart = page.locator("[routerlink*='cart']");
  30 |     await ClickOnCart.click();
> 31 |     await page.locator("div li").last().waitFor();
     |                                         ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  32 |     const ItemCheckOnCheckOutPage = await page.locator('h3:has-text("iphone 13 pro")').isVisible();
  33 |     expect (ItemCheckOnCheckOutPage).toBeTruthy;
  34 |     //await page.getByRole('button', { name: 'Checkout' }).click();
  35 |     await page.locator('button[type="button"]').nth(1).click();
  36 |     await expect (page.getByText(' Payment Method ')).toBeVisible();
  37 |     await page.locator('input[type="text"]').nth(1).fill('123');
  38 |     await page.locator('input[type="text"]').nth(2).fill('phanindra chandraprakash');
  39 |     await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
  40 |     await page.locator('button[type="submit"]').click();
  41 |     await expect (page.getByText('* Coupon Applied')).toBeVisible();
  42 |     const CouponText = await page.locator('p[style*="green"]').textContent();
  43 |     console.log(CouponText);
  44 |     await page.getByPlaceholder('Select Country').pressSequentially('united s', { delay: 150 });
  45 |     const CountryDropdown = await page.locator('.ta-results')
  46 |     await CountryDropdown.waitFor();
  47 |     const CountryOptions = await CountryDropdown.locator('button').count();
  48 |     for (let i = 0; i < CountryOptions; i++) {
  49 |         const text = await CountryDropdown.locator('button').nth(i).textContent();
  50 |         console.log(text);
  51 |         if(text === " United States"){
  52 |             await CountryDropdown.locator('button').nth(i).click();
  53 |             break; 
  54 |         }
  55 |     }
  56 |     //await page.locator('.ta-results > button').nth(0).click();
  57 |     await page.locator('a[class*="btnn"]').click();
  58 | 
  59 |     //const ItemCheckOnOrdersPage = await page.locator('td:has-text("iphone 13 pro")').isVisible();
  60 |     await expect (page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  61 |     const orderid = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
  62 |     const firstPass = orderid.replace("| ",""); //| 6aab01e552cfef03ed0f82c7 |
  63 |     const secondPass = firstPass.replace(" |","");
  64 |     const finalOrderId = secondPass.trim();
  65 |     console.log('final order id: ' + finalOrderId);
  66 |     await page.getByRole('button', { name: '  ORDERS' }).click();
  67 |     await page.getByText('Your Orders').waitFor();
  68 |     const listOfOrders = await page.locator('tbody')
  69 |     listOfOrders.waitFor();
  70 |     const countOfOrders = await page.locator('tbody tr').count();
  71 |     console.log("num check_1 = " + countOfOrders);
  72 | 
  73 |     for (let i = 0; i < countOfOrders; i++) {
  74 |         const getOrderId = await listOfOrders.locator('tr').nth(i).locator('th').first().textContent();
  75 |         console.log("orderid is: "+ getOrderId)
  76 | 
  77 |         if (getOrderId === finalOrderId){
  78 |             await listOfOrders.locator('tr').nth(i).locator('td').nth(4).locator('button').first().click();
  79 |             break;
  80 |         }
  81 |     }
  82 |     
  83 |     const text1 = await page.locator('//p[@class="tagline"]').textContent();
  84 |     console.log(text1);
  85 | });
```