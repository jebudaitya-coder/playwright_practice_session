import {test, page, browser, expect} from '@playwright/test'

test('simulate and item order end to end', async({page}) => {
    //launch the url and login with valid credentials
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const UN = 'jebudaitya@gmail.com';
    const PWD = 'Jebu&357@uto';
    const UserName = page.locator('#userEmail');
    const Password = page.locator('#userPassword');
    const LoginButton = page.locator('#login');
    await UserName.fill(UN);
    await Password.fill(PWD);
    await LoginButton.click();
    await page.waitForLoadState('networkidle');
    //save the list of items into an array to iterate sequentially to add the specific item into the cart
    const ItemToChoose = 'iphone 13 pro';
    const ListOfItems = await page.locator('.card-body');
    await ListOfItems.first().waitFor();
    const NumberOfItems = await ListOfItems.count();
    console.log("number of items on this page: " + NumberOfItems);

    for (let i = 0; i < NumberOfItems; i++) {
        if(await ListOfItems.nth(i).locator('b').textContent() === ItemToChoose){
            await ListOfItems.nth(i).locator('text =  Add To Cart').click();
            break;
        }
    }

    const ClickOnCart = page.locator("[routerlink*='cart']");
    await ClickOnCart.click();
    await page.locator("div li").last().waitFor();
    const ItemCheckOnCheckOutPage = await page.locator('h3:has-text("iphone 13 pro")').isVisible();
    expect (ItemCheckOnCheckOutPage).toBeTruthy;
    //await page.getByRole('button', { name: 'Checkout' }).click();
    await page.locator('button[type="button"]').nth(1).click();
    await expect (page.getByText(' Payment Method ')).toBeVisible();
    await page.locator('input[type="text"]').nth(1).fill('123');
    await page.locator('input[type="text"]').nth(2).fill('phanindra chandraprakash');
    await page.locator('input[type="text"]').nth(3).fill('rahulshettyacademy');
    await page.locator('button[type="submit"]').click();
    await expect (page.getByText('* Coupon Applied')).toBeVisible();
    const CouponText = await page.locator('p[style*="green"]').textContent();
    console.log(CouponText);
    await page.getByPlaceholder('Select Country').pressSequentially('united s', { delay: 150 });
    const CountryDropdown = await page.locator('.ta-results')
    await CountryDropdown.waitFor();
    const CountryOptions = await CountryDropdown.locator('button').count();
    for (let i = 0; i < CountryOptions; i++) {
        const text = await CountryDropdown.locator('button').nth(i).textContent();
        console.log(text);
        if(text === " United States"){
            await CountryDropdown.locator('button').nth(i).click();
            break; 
        }
    }
    //await page.locator('.ta-results > button').nth(0).click();
    await page.locator('a[class*="btnn"]').click();

    //const ItemCheckOnOrdersPage = await page.locator('td:has-text("iphone 13 pro")').isVisible();
    await expect (page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    const orderid = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    const firstPass = orderid.replace("| ",""); //| 6aab01e552cfef03ed0f82c7 |
    const secondPass = firstPass.replace(" |","");
    const finalOrderId = secondPass.trim();
    console.log('final order id: ' + finalOrderId);
    await page.getByRole('button', { name: '  ORDERS' }).click();
    await page.getByText('Your Orders').waitFor();
    const listOfOrders = await page.locator('tbody')
    listOfOrders.waitFor();
    const countOfOrders = await page.locator('tbody tr').count();
    console.log("num check_1 = " + countOfOrders);

    for (let i = 0; i < countOfOrders; i++) {
        const getOrderId = await listOfOrders.locator('tr').nth(i).locator('th').first().textContent();
        console.log("orderid is: "+ getOrderId)

        if (getOrderId === finalOrderId){
            await listOfOrders.locator('tr').nth(i).locator('td').nth(4).locator('button').first().click();
            break;
        }
    }
    
    const text1 = await page.locator('//p[@class="tagline"]').textContent();
    console.log(text1);
});