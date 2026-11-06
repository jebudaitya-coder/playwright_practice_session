import { test, expect, type Page, type Locator } from '@playwright/test';


test('Types of Selectors', async ({ page: Page }) => {
  await Page.goto('https://eventhub.rahulshettyacademy.com/login');
  await Page.getByLabel('email').fill('student@example.com');
  await Page.getByPlaceholder('••••••').fill('secret123');
  await Page.getByRole('button', {name: 'Sign In'}).click();
  //await expect(page.getByTitle('EventHub — Discover & Book Events')).toBeVisible();
  await expect(Page.getByText('Home')).toBeVisible();
  await expect(Page.getByAltText('Dilli Diwali Mela')).toBeVisible();
  await expect(Page.getByTestId('nav-events')).toBeVisible();
  await Page.locator('//*[@id="nav-bookings"]').click(); //xpath
  await Page.locator('#nav-events').click(); //css - preferred
})