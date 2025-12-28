const {test, expect}= require('@playwright/test')

test('Launch w3school application', async ({page})=>
{
   await page.goto("https://w3schools.com/")
   await page.waitForTimeout(4000)
   //Capture Title
   const title= await page.title()
   console.log("Title of Web Application:"+title)
   
   //Capture URL

   const url=await page.url()
   console.log("URL of application:"+url)
   
})