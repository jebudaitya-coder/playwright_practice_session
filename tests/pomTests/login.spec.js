const {page,test,expect} = require('@playwright/test') //CommonJS (CJS) & Built natively into Node.js
const {LoginPage} = require('../../pages/LoginPage')
//import { LoginPage } from '../../pages/LoginPage' //ECMAScript Modules (ESM) & Native to modern browsers and modern Node.js

test ('login to the app', async({page}) => {
    const loginPage = new LoginPage(page);
    const UN = 'jebudaitya@gmail.com';
    const PWD = 'Jebu&357@uto';
    await loginPage.goToLoginPage();
    await loginPage.validLogin(UN, PWD);
})