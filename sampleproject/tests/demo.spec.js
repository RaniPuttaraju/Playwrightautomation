const {test, expect} = require('@playwright/test')
 
test("This is a First Test",  function display(){
      console.log("It is a First Playwright test case");
     
})

test("this is a second test",  function(){
    console.log("It is a Second Playwright test case");
     
})

test("this is a third test",  ()=>{
    console.log("It is a third Playwright test case");
     
})