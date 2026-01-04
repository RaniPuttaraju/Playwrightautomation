//import {test,expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

test.beforeEach(async()=>

{
    console.log("Login to the application")
})


test.afterEach(async()=>

{
    console.log("Logout from the application")
})

test("First Test", async ({page})=> {
    console.log("Its is a first test case!!!")
})

test("Second Test", async ({page})=> {
    console.log("Its is a Second test case!!!")
})

test("Third Test", async ({page})=> {
    console.log("Its is a third test case!!!")
})

test("Fourth Test", async ({page})=> {
    console.log("Its is a fourth test case!!!")

})