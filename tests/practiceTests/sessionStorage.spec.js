import{page, test, browser, expect, request} from '@playwright/test'


let browserState;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('jebudaitya@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Jebu&357@uto');
    await page.getByRole('button',{name:'Login'}).click();
    await page.locator('div>h5>b').first().waitFor();
    await context.storageState({path:'state.json'});
    browserState = await browser.newContext({storageState:'state.json'});
})

test('test_1', async () =>{
    const page = await browserState.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    console.log("test_1 results ---> available product names: " + await page.locator('div>h5>b').first().textContent());
})

test('test_2', async () =>{
    const page = await browserState.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await page.locator('li>button>i').nth(1).click();
    await page.locator('div>table>tbody>tr').first().waitFor();
    console.log("test_2 results ---> numner of orders: " + await page.locator('div>table>tbody>tr').count());
})