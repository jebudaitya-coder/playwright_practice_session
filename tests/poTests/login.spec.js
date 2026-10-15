const {page,test,expect} = require('@playwright/test')
const {LoginPage} = require('../../pages/LoginPage')
//import { LoginPage } from '../../pages/LoginPage' //this is for typescript



test ('login to the app', async({page}) => {
    const loginPage = new LoginPage(page);
    const UN = 'jebudaitya@gmail.com';
    const PWD = 'Jebu&357@uto';
    loginPage.goToLoginPage();
    loginPage.validLogin(UN, PWD);
})