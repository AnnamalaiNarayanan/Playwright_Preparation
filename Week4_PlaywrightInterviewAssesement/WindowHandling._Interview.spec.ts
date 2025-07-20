import { test } from "@playwright/test";

test("window handling", async({page,context})=>{
    
    await page.goto("https://the-internet.herokuapp.com/windows")

    // //create promise
    // const promise = context.waitForEvent('page')

    // //click the link
    // page.getByRole('link', {name:"Click Here"}).click()

    // //resolve the promise
    // const link = await promise

    const [createPromise] =await Promise.all([

        context.waitForEvent("page"),
        page.getByRole('link', {name:"Click Here"}).click()
    ])

    console.log(await createPromise.title())
    await createPromise.close()

    await page.waitForTimeout(3000)
})