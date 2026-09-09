const { test, expect } = require('@playwright/test');

test('first test - example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
