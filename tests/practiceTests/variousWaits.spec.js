import { test, expect, page } from '@playwright/test';

test('This test will fail', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('email').fill('student@example.com');
  await page.getByPlaceholder('••••••').fill('secret123');
  await page.getByRole('button', {name: 'Sign In'}).click();
  const allTitles = await page.locator('a > h3').allTextContents();
  console.log(allTitles)
});

test('wait for load state method', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('email').fill('student@example.com');
  await page.getByPlaceholder('••••••').fill('secret123');
  await page.getByRole('button', {name: 'Sign In'}).click();
  await page.waitForLoadState('networkidle') //this is a little flaky function.
  const allTitles = await page.locator('a > h3').allTextContents();
  console.log(allTitles)
});

test('wait for the first element', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('email').fill('student@example.com');
  await page.getByPlaceholder('••••••').fill('secret123');
  await page.getByRole('button', {name: 'Sign In'}).click();
  await page.locator('a > h3').first().waitFor();
  const allArticlesText = await page.locator('a > h3').allTextContents();
  console.log(allArticlesText);
});