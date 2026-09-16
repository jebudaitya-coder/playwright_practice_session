import { test, expect, browser } from '@playwright/test';

test('understand the browser context', async ({ browser }) => {
  const context = await browser.newContext(); //launches browser instance
  const page = await context.newPage(); //launches isolated pages
  await page.goto('https://www.google.com'); //go to the respective urls
});

test('direct page context', async({page}) => {
  await page.goto('https://www.google.com')
});