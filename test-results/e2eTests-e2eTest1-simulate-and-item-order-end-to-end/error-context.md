# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2eTests\e2eTest1.spec.js >> simulate and item order end to end
- Location: tests\e2eTests\e2eTest1.spec.js:3:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
    1) <label _ngcontent-vbu-c44="" class="ng-star-inserted"> | 6abb0e622be7a4bc2b779bdb | </label> aka getByText('| 6abb0e622be7a4bc2b779bdb |')
    2) <label _ngcontent-vbu-c44="" class="ng-star-inserted"> | 6abb0e622be7a4bc2b779bde | </label> aka getByText('| 6abb0e622be7a4bc2b779bde |')

Call log:
  - waiting for locator('.em-spacer-1 .ng-star-inserted')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
    - table [ref=e26]:
      - rowgroup [ref=e27]:
        - row [ref=e28]:
          - cell [ref=e29]:
            - table [ref=e30]:
              - rowgroup [ref=e31]:
                - row [ref=e32]:
                  - cell [ref=e33]
                - row [ref=e34]:
                  - cell [ref=e35]
                - row [ref=e36]:
                  - cell [ref=e37]
                - row [ref=e38]:
                  - cell [ref=e39]:
                    - table [ref=e40]:
                      - rowgroup [ref=e41]:
                        - row [ref=e42]:
                          - cell [ref=e43]:
                            - table [ref=e44]:
                              - rowgroup [ref=e45]:
                                - row [ref=e46]:
                                  - cell [ref=e47]:
                                    - heading "Thankyou for the order." [level=1] [ref=e48]
                                - row [ref=e49]:
                                  - cell "You can see all the Orders in Orders History Page" [ref=e50]:
                                    - text: You can see all the Orders in
                                    - generic [ref=e51] [cursor=pointer]: Orders History Page
                                - row [ref=e52]:
                                  - cell "| 6abb0e622be7a4bc2b779bdb | | 6abb0e622be7a4bc2b779bde |" [ref=e53]:
                                    - generic [ref=e54]: "| 6abb0e622be7a4bc2b779bdb |"
                                    - generic [ref=e55]: "| 6abb0e622be7a4bc2b779bde |"
                - row [ref=e56]:
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]:
                    - table [ref=e60]:
                      - rowgroup [ref=e61]:
                        - row [ref=e62]:
                          - cell [ref=e63]
                        - row [ref=e64]:
                          - cell "Items in your order may ship separately. View your order for shipping updates." [ref=e65]: Items in your order may ship separately.View your order for shipping updates.
                        - row [ref=e66]:
                          - button "Click To Download Order Details in CSV" [ref=e67] [cursor=pointer]
                - row [ref=e68]:
                  - cell [ref=e69]
                - row [ref=e70]:
                  - cell [ref=e71]:
                    - table [ref=e72]:
                      - rowgroup [ref=e73]:
                        - row [ref=e74]:
                          - cell [ref=e75]
                        - row [ref=e76]:
                          - cell "Questions? We're on call." [ref=e77]
                        - row [ref=e78]:
                          - cell "Monday to Friday 9am - 9pm" [ref=e79]
                        - row [ref=e80]:
                          - cell "Saturday to Sunday 10am - 6pm" [ref=e81]
                        - row [ref=e82]:
                          - cell "dummywebsite@rahulshettyacademy.com" [ref=e83]
                        - row [ref=e84]:
                          - cell [ref=e85]
                - row [ref=e86]:
                  - cell [ref=e87]
                - row
  - generic "Order Placed Successfully" [ref=e89] [cursor=pointer]
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
  31 |     await page.locator("div li").last().waitFor();
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
> 61 |     const orderid = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
     |                                                                          ^ Error: locator.textContent: Error: strict mode violation: locator('.em-spacer-1 .ng-star-inserted') resolved to 2 elements:
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