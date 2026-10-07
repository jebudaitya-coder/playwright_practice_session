import {test, page, browser, expect} from '@playwright/test'

test.skip('screenshots',async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.screenshot({path:"beforeTyping.png"});
    await page.locator('#displayed-text').screenshot({path:"elementBefore.png"})
    await page.locator('#displayed-text').fill('hello! is this text visible?')
    await page.screenshot({path:"afterTyping.png"});
    await page.locator('#displayed-text').screenshot({path:"elementAfter.png"})
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden();
});

test('visual testing',async({page}) => {
    await page.goto("https://csszengarden.com/221/");
    expect(await page.screenshot()).toMatchSnapshot('landingPage.png')
});