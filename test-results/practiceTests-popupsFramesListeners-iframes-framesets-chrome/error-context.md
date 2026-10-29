# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceTests\popupsFramesListeners.spec.js >> iframes/framesets
- Location: tests\practiceTests\popupsFramesListeners.spec.js:32:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#iframe-1').contentFrame().locator('a[href="/mcp/introduction"]')
    - locator resolved to <a href="/mcp/introduction" class="navbar__item navbar__link">MCP</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - navigation [ref=f1e5]:
    - generic [ref=f1e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=f1e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=f1e9]
          - paragraph [ref=f1e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=f1e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=f1e12]:
      - listitem [ref=f1e13] [cursor=pointer]:
        - button " HOME" [ref=f1e14]:
          - generic [ref=f1e15]: 
          - text: HOME
      - listitem
      - listitem [ref=f1e16] [cursor=pointer]:
        - button " ORDERS" [ref=f1e17]:
          - generic [ref=f1e18]: 
          - text: ORDERS
      - listitem [ref=f1e19] [cursor=pointer]:
        - button " Cart" [ref=f1e20]:
          - generic [ref=f1e21]: 
          - text: Cart
      - listitem [ref=f1e22] [cursor=pointer]:
        - button "Sign Out" [ref=f1e23]:
          - generic [aria-hidden] [ref=f1e24]: 
          - text: Sign Out
  - generic [ref=f1e25]:
    - heading "Your Orders" [level=1] [ref=f1e26]
    - table [ref=f1e27]:
      - rowgroup [ref=f1e28]:
        - row [ref=f1e29]:
          - columnheader "Order Id" [ref=f1e30]
          - columnheader "Product Image" [ref=f1e31]
          - columnheader "Name" [ref=f1e32]
          - columnheader "Price" [ref=f1e33]
          - columnheader "Ordered Date" [ref=f1e34]
          - columnheader "View" [ref=f1e35]
          - columnheader "Delete" [ref=f1e36]
      - rowgroup [ref=f1e37]:
        - row [ref=f1e38]:
          - rowheader "6ae2d67ea90a419aa831e49f" [ref=f1e39]
          - cell [ref=f1e40]
          - cell "ZARA COAT 3" [ref=f1e42]
          - cell "$ 11500" [ref=f1e43]
          - cell "Thu Oct 29" [ref=f1e44]
          - cell [ref=f1e45]:
            - button "View" [ref=f1e46] [cursor=pointer]
          - cell [ref=f1e47]:
            - button "Delete" [ref=f1e48] [cursor=pointer]
        - row [ref=f1e49]:
          - rowheader "6ae2d672a90a419aa831e443" [ref=f1e50]
          - cell [ref=f1e51]
          - cell "ZARA COAT 3" [ref=f1e53]
          - cell "$ 11500" [ref=f1e54]
          - cell "Thu Oct 29" [ref=f1e55]
          - cell [ref=f1e56]:
            - button "View" [ref=f1e57] [cursor=pointer]
          - cell [ref=f1e58]:
            - button "Delete" [ref=f1e59] [cursor=pointer]
        - row [ref=f1e60]:
          - rowheader "6ae2d672a90a419aa831e43c" [ref=f1e61]
          - cell [ref=f1e62]
          - cell "ZARA COAT 3" [ref=f1e64]
          - cell "$ 11500" [ref=f1e65]
          - cell "Thu Oct 29" [ref=f1e66]
          - cell [ref=f1e67]:
            - button "View" [ref=f1e68] [cursor=pointer]
          - cell [ref=f1e69]:
            - button "Delete" [ref=f1e70] [cursor=pointer]
        - row [ref=f1e71]:
          - rowheader "6ae2d66da90a419aa831e3f2" [ref=f1e72]
          - cell [ref=f1e73]
          - cell "ZARA COAT 3" [ref=f1e75]
          - cell "$ 11500" [ref=f1e76]
          - cell "Thu Oct 29" [ref=f1e77]
          - cell [ref=f1e78]:
            - button "View" [ref=f1e79] [cursor=pointer]
          - cell [ref=f1e80]:
            - button "Delete" [ref=f1e81] [cursor=pointer]
        - row [ref=f1e82]:
          - rowheader "6ae2d66ca90a419aa831e3e9" [ref=f1e83]
          - cell [ref=f1e84]
          - cell "ZARA COAT 3" [ref=f1e86]
          - cell "$ 11500" [ref=f1e87]
          - cell "Thu Oct 29" [ref=f1e88]
          - cell [ref=f1e89]:
            - button "View" [ref=f1e90] [cursor=pointer]
          - cell [ref=f1e91]:
            - button "Delete" [ref=f1e92] [cursor=pointer]
        - row [ref=f1e93]:
          - rowheader "6ae2d659a90a419aa831e3a1" [ref=f1e94]
          - cell [ref=f1e95]
          - cell "ZARA COAT 3" [ref=f1e97]
          - cell "$ 11500" [ref=f1e98]
          - cell "Thu Oct 29" [ref=f1e99]
          - cell [ref=f1e100]:
            - button "View" [ref=f1e101] [cursor=pointer]
          - cell [ref=f1e102]:
            - button "Delete" [ref=f1e103] [cursor=pointer]
        - row [ref=f1e104]:
          - rowheader "6ae2d64fa90a419aa831e366" [ref=f1e105]
          - cell [ref=f1e106]
          - cell "ZARA COAT 3" [ref=f1e108]
          - cell "$ 11500" [ref=f1e109]
          - cell "Thu Oct 29" [ref=f1e110]
          - cell [ref=f1e111]:
            - button "View" [ref=f1e112] [cursor=pointer]
          - cell [ref=f1e113]:
            - button "Delete" [ref=f1e114] [cursor=pointer]
        - row [ref=f1e115]:
          - rowheader "6ae2d648a90a419aa831e331" [ref=f1e116]
          - cell [ref=f1e117]
          - cell "iphone 13 pro" [ref=f1e119]
          - cell "$ 55000" [ref=f1e120]
          - cell "Thu Oct 29" [ref=f1e121]
          - cell [ref=f1e122]:
            - button "View" [ref=f1e123] [cursor=pointer]
          - cell [ref=f1e124]:
            - button "Delete" [ref=f1e125] [cursor=pointer]
        - row [ref=f1e126]:
          - rowheader "6ae2d645a90a419aa831e310" [ref=f1e127]
          - cell [ref=f1e128]
          - cell "iphone 13 pro" [ref=f1e130]
          - cell "$ 55000" [ref=f1e131]
          - cell "Thu Oct 29" [ref=f1e132]
          - cell [ref=f1e133]:
            - button "View" [ref=f1e134] [cursor=pointer]
          - cell [ref=f1e135]:
            - button "Delete" [ref=f1e136] [cursor=pointer]
    - generic [ref=f1e137]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=f1e139]:
    - button "Go Back to Shop" [ref=f1e140] [cursor=pointer]
    - button "Go Back to Cart" [ref=f1e141] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, page, browser, expect} from '@playwright/test'
  2  | 
  3  | test.skip('browser back and forward nagvation',async({page}) => {
  4  |     //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  5  |     await page.goto("https://www.packsize.com")
  6  |     await page.goto("https://www.google.com")
  7  |     await page.goBack();
  8  |     await page.goForward();
  9  | });
  10 | 
  11 | test.skip('hide show elements',async({page}) => {
  12 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  13 |     await page.locator('#displayed-text').fill('hello! is this text visible?')
  14 |     await expect(page.locator('#displayed-text')).toBeVisible();
  15 |     await page.locator('#hide-textbox').click()
  16 |     await expect(page.locator('#displayed-text')).toBeHidden();
  17 | });
  18 | 
  19 | test.skip('dialogs/pop-ups',async({page}) => {
  20 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  21 |     await page.locator('#name').fill('jebudaitya');
  22 |     await page.on('dialog', dialog => {dialog.accept()});//{dialog.dismiss()}
  23 |     //await page.locator('#confirmbtn').click();
  24 |     await page.locator('#alertbtn').click();
  25 | });
  26 | 
  27 | test.skip('hover text select',async({page}) => {
  28 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  29 |     await page.locator('#mousehover').hover()
  30 | });
  31 | 
  32 | test('iframes/framesets',async({page}) => {
  33 |     await page.goto("https://practice-automation.com/iframes/");
  34 |     const frame1 = page.frameLocator('#iframe-1')
> 35 |     frame1.locator('a[href="/mcp/introduction"]').click();
     |                                                   ^ Error: locator.click: Test ended.
  36 |     frame1.locator('a[href="https://modelcontextprotocol.io"]').click();
  37 | 
  38 |     await page.mainFrame();
  39 | 
  40 |     const frame2 = page.frame('bottom-iframe');
  41 |     frame2.locator('a[href="/downloads"]').click();
  42 | 
  43 |     await page.mainFrame();
  44 | 
  45 |     const frame3 = page.locator('#iframe-1')
  46 |     const frame = frame3.contentFrame();
  47 |     frame.locator('a[href="/mcp/introduction"]').click();
  48 | });
```