# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_1.spec.js >> place an order for iphone 13 pro successfully
- Location: tests\test_1.spec.js:3:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Home', exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('button', { name: 'Home', exact: true }) with timeout 5000ms
  - waiting for getByRole('button', { name: 'Home', exact: true })

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- paragraph: Home | Search
- heading "Filters" [level=4]
- textbox "search"
- heading "Price Range" [level=6]
- textbox "Min Price"
- textbox "Max Price"
- heading "Categories" [level=6]
- text: 
- checkbox
- text: fashion
- checkbox
- text: electronics
- checkbox
- text: household
- heading "Sub Categories" [level=6]
- text: 
- checkbox
- text: t-shirts
- checkbox
- text: shirts
- checkbox
- text: shoes
- checkbox
- text: mobiles
- checkbox
- text: laptops
- heading "Search For" [level=6]
- text: 
- checkbox
- text: men
- checkbox
- text: women Showing 3 results | User can only see maximum 9 products on a page
- img
- heading "ADIDAS ORIGINAL" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "ZARA COAT 3" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "iphone 13 pro" [level=5]
- text: $ 55000
- button "View"
- button " Add To Cart"
- list "Pagination":
  - listitem: « Previous page
  - listitem: You're on page 1
  - listitem: Next page »
- text: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |  test('place an order for iphone 13 pro successfully', async ({ page }) => {
  4  |     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  5  | 
  6  |     await page.getByPlaceholder('email@example.com').fill('jebudaitya@gmail.com');
  7  |     await page.getByPlaceholder('enter your passsword').fill('Jebu&357@uto');
  8  |     await page.getByRole('button', { name: 'Login', exact: true }).click();
  9  | 
  10 |     await expect(page).toHaveURL(/.*\/dashboard\/.*|.*\/dashboard$/);
  11 | 
> 12 |     await expect(page.getByRole('button', { name: 'Home', exact: true })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  13 |     await expect(page.getByRole('button', { name: 'Cart', exact: true })).toBeVisible();
  14 |     await expect(page.getByRole('button', { name: 'Orders', exact: true })).toBeVisible();
  15 |     await expect(page.getByRole('button', { name: 'Sign Out', exact: true })).toBeVisible();
  16 | 
  17 |     const iphoneCard = page.locator('.card-body').filter({ hasText: 'iphone 13 pro' });
  18 |     await iphoneCard.waitFor();
  19 |     await iphoneCard.getByRole('button', { name: 'View' }).click();
  20 | 
  21 |     await expect(page.locator('.card-title')).toContainText('IPHONE 13 PRO');
  22 |     await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  23 | 
  24 |     await page.getByRole('button', { name: 'Cart', exact: true }).click();
  25 |     await expect(page.getByText('iphone 13 pro', { exact: true })).toBeVisible();
  26 | 
  27 |     await page.getByRole('button', { name: 'Checkout', exact: true }).click();
  28 | 
  29 |     await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
  30 |     await page.getByRole('button', { name: 'Apply Coupon', exact: true }).click();
  31 |     await expect(page.getByText('* Coupon Applied')).toBeVisible();
  32 | 
  33 |     await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
  34 |     await page.getByRole('button', { name: 'United States', exact: true }).first().click();
  35 | 
  36 |     await page.getByText('PLACE ORDER', { exact: true }).click();
  37 |     await expect(page.getByText('Thankyou for the order.', { exact: true })).toBeVisible();
  38 | });
  39 | 
```