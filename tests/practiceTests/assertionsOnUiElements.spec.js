import {test, expect, page} from '@playwright/test'

test('radio button', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await page.locator('#ctl00_mainContent_rbtnl_Trip_0').click();
    expect (page.locator('#ctl00_mainContent_rbtnl_Trip_0')).toBeChecked()
    await page.locator('#ctl00_mainContent_rbtnl_Trip_1').click();
    expect (page.locator('#ctl00_mainContent_rbtnl_Trip_1')).toBeChecked()
    await page.locator('#ctl00_mainContent_rbtnl_Trip_2').click();
    expect (page.locator('#ctl00_mainContent_rbtnl_Trip_2')).toBeChecked()
})

test.only('check boxes', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await page.locator('#ctl00_mainContent_chk_friendsandfamily').click();
    expect (page.locator('#ctl00_mainContent_chk_friendsandfamily')).toBeChecked()
    await page.locator('#ctl00_mainContent_chk_SeniorCitizenDiscount').click();
    expect (page.locator('#ctl00_mainContent_chk_SeniorCitizenDiscount')).toBeChecked()
    await page.locator('#ctl00_mainContent_chk_IndArm').click();
    expect (page.locator('#ctl00_mainContent_chk_IndArm')).toBeChecked()
})
