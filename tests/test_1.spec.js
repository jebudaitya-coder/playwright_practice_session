import { test, expect } from '@playwright/test';

 test('place an order for iphone 13 pro successfully', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.getByPlaceholder('email@example.com').fill('jebudaitya@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Jebu&357@uto');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/.*\/dashboard\/.*|.*\/dashboard$/);

    await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cart' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Orders' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();

    const iphoneCard = page.locator('.card-body').filter({ hasText: 'iphone 13 pro' });
    await iphoneCard.waitFor();
    await iphoneCard.getByRole('button', { name: 'View' }).click();

    await expect(page.getByRole('heading', { name: 'IPHONE 13 PRO' })).toBeVisible();
    await page.getByRole('button', { name: 'Add to Cart' }).click();

    await page.getByRole('button', { name: 'Cart', exact: true }).click();
    await expect(page.getByText('iphone 13 pro')).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page.getByText('Payment Method')).toBeVisible();

    await page.getByPlaceholder('Coupon Code').fill('rahulshettyacademy');
    await page.getByRole('button', { name: 'Apply Coupon' }).click();
    await expect(page.getByText('* Coupon Applied')).toBeVisible();

    await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
    await page.getByRole('button', { name: 'United States', exact: true }).first().click();

    await page.getByText('PLACE ORDER', { exact: true }).click();
    await expect(page.getByText('Thankyou for the order.', { exact: true })).toBeVisible();
});
