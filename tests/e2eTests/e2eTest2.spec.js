import {test, page, browser, expect} from '@playwright/test'

test('simulate and item order end to end', async({page}) => {
    //launch the url and login with valid credentials
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const UN = 'jebudaitya@gmail.com';
    const PWD = 'Jebu&357@uto';
    const UserName = page.getByPlaceholder("email@example.com");
    const Password = page.getByPlaceholder("enter your passsword");
    const LoginButton = page.getByRole('button',{name:'login'});
    await UserName.fill(UN);
    await Password.fill(PWD);
    await LoginButton.click();
    await page.waitForLoadState('networkidle');
    //save the list of items into an array to iterate sequentially to add the specific item into the cart
    await page.locator('.card-body b').first().waitFor();
    await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:'Add to Cart'}).click();

    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click();

    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();

    //await page.locator('button[type="button"]').nth(1).click();
    await expect (page.getByText(' Payment Method ')).toBeVisible();
    await page.locator('input[type="text"]').nth(1).fill('123');
    await page.locator('input[type="text"]').nth(2).fill('phanindra chandraprakash');
    await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
    await page.locator('button[type="submit"]').click();
    await expect (page.getByText('* Coupon Applied')).toBeVisible();
    const CouponText = await page.locator('p[style*="green"]').textContent();
    console.log(CouponText);
    await page.getByPlaceholder('Select Country').pressSequentially('united states', { delay: 150 });
    await page.getByRole("button",{name :"United States"}).first().click();
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});