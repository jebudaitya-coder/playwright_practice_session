const {page,test,expect} = require('@playwright/test'); //CommonJS (CJS) & Built natively into Node.js
const {LoginPage} = require('../../pages/LoginPage');
const loginData = JSON.parse(JSON.stringify(require('../utils/testData/loginCredentialsTestData.json')));
//import { LoginPage } from '../../pages/LoginPage' //ECMAScript Modules (ESM) & Native to modern browsers and modern Node.js

test ('login to the app', async({page}) => {
    const loginPage = new LoginPage(page);
    const UN = loginData.UserName;
    const PWD = loginData.Password;
    console.log(UN, PWD)
    await loginPage.goToLoginPage();
    await loginPage.validLogin(UN, PWD);
})