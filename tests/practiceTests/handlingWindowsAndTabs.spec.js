import {test, expect, page, browser} from '@playwright/test'

test('child window', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const blinkingText = page.locator('[href*="documents-request"]');
    await expect (blinkingText).toHaveAttribute('class','blinkingText')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        blinkingText.click(),
    ])

    const text = await newPage.locator('.red').textContent();
    const arrayText = text.split("@")
    const domainName = arrayText[1].split(" ")[0]
    //console.log(domainName);
    await page.locator("#username").fill(domainName)
    console.log(await page.locator("#username").inputValue());
});