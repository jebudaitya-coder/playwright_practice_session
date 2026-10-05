import {test,page,expect} from '@playwright/test'
import {authenticatedPage, customTest} from '../utils/fixture_utils/fixtures.js'

customTest("test your 1st fixture", async({authenticatedPage})=>{
    console.log("test executed successfully")
})