const { page, test, expect } = require('@playwright/test'); //CommonJS (CJS) & Built natively into Node.js
const { LoginPage } = require('../../pages/LoginPage');
const loginData = JSON.parse(JSON.stringify(require('../utils/testData/loginCredentialsTestData.json')));
const {customtest} = require('../utils/fixture_utils/test-base')
//import { LoginPage } from '../../pages/LoginPage' //ECMAScript Modules (ESM) & Native to modern browsers and modern Node.js

for (const data of loginData) {
    test(`login to the app ${data.TestName}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const UN = data.UserName;
        const PWD = data.Password;
        console.log(data.TestName, UN, PWD)
        await loginPage.goToLoginPage();
        await loginPage.validLogin(UN, PWD);
    })
}

customtest('login with fixture test data', async ({ page, testDataForLogin }) => {
        const loginPage = new LoginPage(page);
        const UN = testDataForLogin.UserName;
        const PWD = testDataForLogin.Password;
        console.log(testDataForLogin.TestName, UN, PWD)
        await loginPage.goToLoginPage();
        await loginPage.validLogin(UN, PWD);
    })
