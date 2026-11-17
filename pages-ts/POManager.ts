import {LoginPage} from './LoginPage'
import { Page } from '@playwright/test';

export class POManager{
    page: Page;
    loginPage: LoginPage;
    constructor(page: Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }
}