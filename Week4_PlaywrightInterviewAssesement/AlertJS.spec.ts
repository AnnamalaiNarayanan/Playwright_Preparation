import test, { expect } from '@playwright/test'

test("Handling Alert", async({page})=>{

    page.once("dialog", async alert =>{
        console.log(alert.type())
        const message = alert.message()
        alert.dismiss()
    })

   await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

   //click for js alert
   const jsConfirm = page.getByRole('button', {name:"Click for JS Confirm"})
   await jsConfirm.click()

   //getText of the after alert operation
   const text = await page.locator("#result").innerText({timeout:3000})

    expect.soft(text).toBe("You clicked: Cancel")
    
})