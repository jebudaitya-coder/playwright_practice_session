# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2eTests\e2eTest2.spec.js >> simulate and item order end to end
- Location: tests\e2eTests\e2eTest2.spec.js:3:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

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
  8  |     const UserName = page.getByPlaceholder("email@example.com");
  9  |     const Password = page.getByPlaceholder("enter your passsword");
  10 |     const LoginButton = page.getByRole('button',{name:'login'});
  11 |     await UserName.fill(UN);
  12 |     await Password.fill(PWD);
  13 |     await LoginButton.click();
  14 |     await page.waitForLoadState('networkidle');
  15 |     //save the list of items into an array to iterate sequentially to add the specific item into the cart
  16 |     await page.locator('.card-body b').first().waitFor();
  17 |     await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:'Add to Cart'}).click();
  18 | 
  19 |     await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click();
  20 | 
> 21 |     await page.locator("div li").first().waitFor();
     |                                          ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  22 |     await expect(page.getByText("ZARA COAT 3")).toBeVisible();
  23 | 
  24 |     await page.getByRole('button', { name: 'Checkout' }).click();
  25 | 
  26 |     //await page.locator('button[type="button"]').nth(1).click();
  27 |     await expect (page.getByText(' Payment Method ')).toBeVisible();
  28 |     await page.locator('input[type="text"]').nth(1).fill('123');
  29 |     await page.locator('input[type="text"]').nth(2).fill('phanindra chandraprakash');
  30 |     await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
  31 |     await page.locator('button[type="submit"]').click();
  32 |     await expect (page.getByText('* Coupon Applied')).toBeVisible();
  33 |     const CouponText = await page.locator('p[style*="green"]').textContent();
  34 |     console.log(CouponText);
  35 |     await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
  36 |     await page.getByRole("button",{name :"United States"}).first().click();
  37 |     await page.getByText("PLACE ORDER").click();
  38 |     await expect(page.getByText("Thankyou for the order.")).toBeVisible();
  39 | });
```