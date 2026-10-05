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
  - waiting for locator('a[href="/downloads"]')

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
  35 |     frame1.locator('a[href="/mcp/introduction"]').click();
  36 |     frame1.locator('a[href="https://modelcontextprotocol.io"]').click();
  37 | 
  38 |     await page.mainFrame();
  39 | 
  40 |     const frame2 = page.frame('bottom-iframe');
> 41 |     frame2.locator('a[href="/downloads"]').click();
     |                                            ^ Error: locator.click: Test ended.
  42 | 
  43 |     await page.mainFrame();
  44 | 
  45 |     const frame3 = page.locator('#iframe-1')
  46 |     const frame = frame3.contentFrame();
  47 |     frame.locator('a[href="/mcp/introduction"]').click();
  48 | });
```