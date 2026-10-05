import { test, expect, page } from '@playwright/test';

test('Types of Selectors', async ({ page }) => {
  await page.route('**/*{.jpg}', route=>route.abort());
  await page.goto('https://www.amazon.com/ref=nav_logo'); 
  await page.getByRole('button',{name:'Continue Shopping'}).click();
  await page.getByPlaceholder('Search Amazon').waitFor();
  await page.waitForTimeout(10000);
})