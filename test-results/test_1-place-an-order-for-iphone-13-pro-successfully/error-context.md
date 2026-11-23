# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test_1.spec.js >> place an order for iphone 13 pro successfully
- Location: tests\test_1.spec.js:3:6

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Cart', exact: true })

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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e29]:
    - link "Continue Shopping❯" [ref=e30] [cursor=pointer]:
      - /url: "#/dashboard"
    - generic [ref=e31]:
      - heading "iphone 13 pro" [level=2] [ref=e32]
      - heading "$ 55000" [level=3] [ref=e33]
      - button "Add to Cart" [active] [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - heading "product details" [level=6] [ref=e37]
        - paragraph [ref=e38]: Apple phone
      - generic [ref=e39]:
        - heading "Share It" [level=6] [ref=e40]
        - list [ref=e42]:
          - listitem [ref=e43]:
            - generic [ref=e44]: 
          - listitem [ref=e46]:
            - generic [ref=e47]: 
          - listitem [ref=e49]:
            - generic [ref=e50]: 
          - listitem [ref=e52]:
            - generic [ref=e53]: 
          - listitem [ref=e55]:
            - generic [ref=e56]: 
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
  8  |     await page.getByRole('button', { name: 'Login' }).click();
  9  | 
  10 |     await expect(page).toHaveURL(/.*\/dashboard\/.*|.*\/dashboard$/);
  11 | 
  12 |     await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
  13 |     await expect(page.getByRole('button', { name: 'Cart' })).toBeVisible();
  14 |     await expect(page.getByRole('button', { name: 'Orders' })).toBeVisible();
  15 |     await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  16 | 
  17 |     const iphoneCard = page.locator('.card-body').filter({ hasText: 'iphone 13 pro' });
  18 |     await iphoneCard.waitFor();
  19 |     await iphoneCard.getByRole('button', { name: 'View' }).click();
  20 | 
  21 |     await expect(page.getByRole('heading', { name: 'IPHONE 13 PRO' })).toBeVisible();
  22 |     await page.getByRole('button', { name: 'Add to Cart' }).click();
  23 | 
> 24 |     await page.getByRole('button', { name: 'Cart', exact: true }).click();
     |                                                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  25 |     await expect(page.getByText('iphone 13 pro')).toBeVisible();
  26 | 
  27 |     await page.getByRole('button', { name: 'Checkout' }).click();
  28 |     await expect(page.getByText('Payment Method')).toBeVisible();
  29 | 
  30 |     await page.getByPlaceholder('Coupon Code').fill('rahulshettyacademy');
  31 |     await page.getByRole('button', { name: 'Apply Coupon' }).click();
  32 |     await expect(page.getByText('* Coupon Applied')).toBeVisible();
  33 | 
  34 |     await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
  35 |     await page.getByRole('button', { name: 'United States', exact: true }).first().click();
  36 | 
  37 |     await page.getByText('PLACE ORDER', { exact: true }).click();
  38 |     await expect(page.getByText('Thankyou for the order.', { exact: true })).toBeVisible();
  39 | });
  40 | 
```