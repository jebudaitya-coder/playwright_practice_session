const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForLogin: {
            "TestName": "valid_login",
            "UserName": "jebudaitya@gmail.com",
            "Password": "Jebu&357@uto"
        }
    }
)