import {test, page, browser, expect} from '@playwright/test'

test.skip('browser back and forward nagvation',async({page}) => {
    //await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.packsize.com")
    await page.goto("https://www.google.com")
    await page.goBack();
    await page.goForward();
});

test.skip('hide show elements',async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#displayed-text').fill('hello! is this text visible?')
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden();
});

test.skip('dialogs/pop-ups',async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#name').fill('jebudaitya');
    await page.on('dialog', dialog => {dialog.accept()});//{dialog.dismiss()}
    //await page.locator('#confirmbtn').click();
    await page.locator('#alertbtn').click();
});

test.skip('hover text select',async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#mousehover').hover()
});

test('iframes/framesets',async({page}) => {
    await page.goto("https://practice-automation.com/iframes/");
    const frame1 = page.frameLocator('#iframe-1')
    frame1.locator('a[href="/mcp/introduction"]').click();
    frame1.locator('a[href="https://modelcontextprotocol.io"]').click();

    await page.mainFrame();

    const frame2 = page.frame('bottom-iframe');
    frame2.locator('a[href="/downloads"]').click();

    await page.mainFrame();

    const frame3 = page.locator('#iframe-1')
    const frame = frame3.contentFrame();
    frame.locator('a[href="/mcp/introduction"]').click();
});