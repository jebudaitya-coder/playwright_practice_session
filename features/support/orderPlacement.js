const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const {await, locator} = require('@playwright/test')
const playwright = require('@playwright/test')

Given('a valid credentials for the e-commerce app', async function () {
   console.log("Given block is executed")
});

When('a user logs in successfully', async function () {
   console.log("When block is executed")
});

Then('they should  be able to successfully place an order for any item', async function () {
   console.log("Then block is executed")
});