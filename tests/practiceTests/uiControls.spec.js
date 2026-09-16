import {test, expect, page} from '@playwright/test'

test('drop down select', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    const currency = await page.locator("#ctl00_mainContent_DropDownListCurrency")
    await currency.selectOption("AED");
    await currency.selectOption("USD");
    await currency.selectOption("INR");
})

test('radio button', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await page.locator('#ctl00_mainContent_rbtnl_Trip_0').click();
    await page.locator('#ctl00_mainContent_rbtnl_Trip_1').click();
    await page.locator('#ctl00_mainContent_rbtnl_Trip_2').click();
})