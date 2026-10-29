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
    - locator resolved to <a class="nav-link" href="/downloads">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4]:
      - /url: https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5]:
      - /url: https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files and tools" [ref=e40] [cursor=pointer]
        - combobox "Search" [active] [ref=e45]
        - generic [ref=e46]:
          - button "Search by image" [ref=e50] [cursor=pointer]
          - link "AI Mode" [ref=e53] [cursor=pointer]
      - generic [ref=e61]:
        - button "Google Search" [ref=e62] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e63] [cursor=pointer]
  - contentinfo [ref=e66]:
    - generic [ref=e67]:
      - generic [ref=e68]:
        - link "Advertising" [ref=e69]:
          - /url: https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e70]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e71]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - link "Build, create, and do more with AI tools from Google" [ref=e73]:
        - /url: https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
      - generic [ref=e74]:
        - link "Privacy" [ref=e75]:
          - /url: https://policies.google.com/privacy?hl=en&fg=1
        - link "Terms" [ref=e76]:
          - /url: https://policies.google.com/terms?hl=en&fg=1
        - button "Settings" [ref=e80] [cursor=pointer]
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