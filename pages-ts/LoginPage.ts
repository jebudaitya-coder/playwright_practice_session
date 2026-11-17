import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    UserName: Locator;
    Password: Locator;
    LoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.UserName = page.locator('#userEmail');
        this.Password = page.locator('#userPassword');
        this.LoginButton = page.locator('#login');
    }

    async goToLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(UN: string, PWD: string) {
        await this.UserName.fill(UN);
        await this.Password.fill(PWD);
        await this.LoginButton.click();
    }
}