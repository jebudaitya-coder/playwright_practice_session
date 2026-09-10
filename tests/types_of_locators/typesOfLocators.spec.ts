import { test, expect } from '@playwright/test';

test('Types of Selectors', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('email').fill('student@example.com');
  await page.getByPlaceholder('••••••').fill('secret123');
  await page.getByRole('button', {name: 'Sign In'}).click();
  //await expect(page.getByTitle('EventHub — Discover & Book Events')).toBeVisible();
  await expect(page.getByText('Home')).toBeVisible();
  await expect(page.getByAltText('Dilli Diwali Mela')).toBeVisible();
  await expect(page.getByTestId('nav-events')).toBeVisible();
})