import {test as baseTest} from '@playwright/test';
interface TestDataForOrder {
    TestName: string;
    UserName: string;
    Password: string;
};
export const customTest = baseTest.extend<{testDataForLogin:TestDataForOrder}>(
    {
        testDataForLogin: {
            "TestName": "valid_login",
            "UserName": "jebudaitya@gmail.com",
            "Password": "Jebu&357@uto"
        }
    }
)