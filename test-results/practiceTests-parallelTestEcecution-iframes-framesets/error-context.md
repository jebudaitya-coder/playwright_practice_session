# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practiceTests\parallelTestEcecution.spec.js >> iframes/framesets
- Location: tests\practiceTests\parallelTestEcecution.spec.js:33:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('a[href="/downloads"]')

```

# Test source

```ts
  1  | import {test, page, browser, expect} from '@playwright/test'
  2  | 
  3  | test.describe.configure({mode:'parallel'});
  4  | test('browser back and forward nagvation',async({page}) => {
  5  |     //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  |     await page.goto("https://www.packsize.com")
  7  |     await page.goto("https://www.google.com")
  8  |     await page.goBack();
  9  |     await page.goForward();
  10 | });
  11 | 
  12 | test('hide show elements',async({page}) => {
  13 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  14 |     await page.locator('#displayed-text').fill('hello! is this text visible?')
  15 |     await expect(page.locator('#displayed-text')).toBeVisible();
  16 |     await page.locator('#hide-textbox').click()
  17 |     await expect(page.locator('#displayed-text')).toBeHidden();
  18 | });
  19 | 
  20 | test('dialogs/pop-ups',async({page}) => {
  21 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  22 |     await page.locator('#name').fill('jebudaitya');
  23 |     await page.on('dialog', dialog => {dialog.accept()});//{dialog.dismiss()}
  24 |     //await page.locator('#confirmbtn').click();
  25 |     await page.locator('#alertbtn').click();
  26 | });
  27 | 
  28 | test('hover text select',async({page}) => {
  29 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  30 |     await page.locator('#mousehover').hover()
  31 | });
  32 | 
  33 | test('iframes/framesets',async({page}) => {
  34 |     await page.goto("https://practice-automation.com/iframes/");
  35 |     const frame1 = page.frameLocator('#iframe-1')
  36 |     frame1.locator('a[href="/mcp/introduction"]').click();
  37 |     frame1.locator('a[href="https://modelcontextprotocol.io"]').click();
  38 | 
  39 |     await page.mainFrame();
  40 | 
  41 |     const frame2 = page.frame('bottom-iframe');
> 42 |     frame2.locator('a[href="/downloads"]').click();
     |                                            ^ Error: locator.click: Test ended.
  43 | 
  44 |     await page.mainFrame();
  45 | 
  46 |     const frame3 = page.locator('#iframe-1')
  47 |     const frame = frame3.contentFrame();
  48 |     frame.locator('a[href="/mcp/introduction"]').click();
  49 | });
```