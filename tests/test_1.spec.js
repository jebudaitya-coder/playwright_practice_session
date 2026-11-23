import { test, expect } from '@playwright/test';

 test('place an order for iphone 13 pro successfully', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.getByPlaceholder('email@example.com').fill('jebudaitya@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Jebu&357@uto');
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).toHaveURL(/.*\/dashboard\/.*|.*\/dashboard$/);

    await expect(page.getByRole('button', { name: 'Home', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cart', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Orders', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Out', exact: true })).toBeVisible();

    const iphoneCard = page.locator('.card-body').filter({ hasText: 'iphone 13 pro' });
    await iphoneCard.waitFor();
    await iphoneCard.getByRole('button', { name: 'View' }).click();

    await expect(page.locator('.card-title')).toContainText('IPHONE 13 PRO');
    await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();

    await page.getByRole('button', { name: 'Cart', exact: true }).click();
    await expect(page.getByText('iphone 13 pro', { exact: true })).toBeVisible();

    await page.getByRole('button', { name: 'Checkout', exact: true }).click();

    await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
    await page.getByRole('button', { name: 'Apply Coupon', exact: true }).click();
    await expect(page.getByText('* Coupon Applied')).toBeVisible();

    await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
    await page.getByRole('button', { name: 'United States', exact: true }).first().click();

    await page.getByText('PLACE ORDER', { exact: true }).click();
    await expect(page.getByText('Thankyou for the order.', { exact: true })).toBeVisible();
});
