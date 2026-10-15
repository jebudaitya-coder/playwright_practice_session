class LoginPage {
    constructor(page) {
        this.page = page;
        this.UserName = page.locator('#userEmail');
        this.Password = page.locator('#userPassword');
        this.LoginButton = page.locator('#login');
    }

    async goToLoginPage() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(UN, PWD) {
        await this.UserName.fill(UN);
        await this.Password.fill(PWD);
        await this.LoginButton.click();
    }
}

module.exports = { LoginPage }