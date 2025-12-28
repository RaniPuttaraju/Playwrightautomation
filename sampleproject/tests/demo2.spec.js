const {test, expect} = require('@playwright/test')
 
test("This is a First Test", async function display(){
     await console.log("It is a First Playwright test case");
     
})

test("this is a second test", async function(){
   await console.log("It is a Second Playwright test case");
     
})

test("this is a third test", async ()=>{
   await console.log("It is a third Playwright test case");
     
})