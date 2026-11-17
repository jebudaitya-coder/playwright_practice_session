//const { page, test, expect } = require('@playwright/test'); //CommonJS (CJS) & Built natively into Node.js
import { Page, test, expect } from "@playwright/test";
import { LoginPage } from "../../pages-ts/LoginPage";
//const { LoginPage } = require('../../pages/LoginPage');
const loginData = JSON.parse(JSON.stringify(import('../utils/testData/loginCredentialsTestData.json',{ with: { type: "json" } })));
//const {customtest} = require('../utils/fixture_utils/test-base')
import { customTest } from "../utils/fixture_utils_ts/test-base";

// for (const data of loginData) {
//     test(`login to the app ${data.TestName}`, async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const UN = data.UserName;
//         const PWD = data.Password;
//         console.log(data.TestName, UN, PWD)
//         await loginPage.goToLoginPage();
//         await loginPage.validLogin(UN, PWD);
//     })
// }

customTest('login with fixture test data', async ({ page, testDataForLogin }) => {
        const loginPage = new LoginPage(page);
        const UN = testDataForLogin.UserName;
        const PWD = testDataForLogin.Password;
        console.log(testDataForLogin.TestName, UN, PWD)
        await loginPage.goToLoginPage();
        await loginPage.validLogin(UN, PWD);
    })
