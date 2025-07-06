// Write a Playwright test that opens salesforce website and navigate from login page to homepage and try to retrive the title.

import { test } from "@playwright/test";

test("Login salesforce", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.fill("#password", "Sales@123")
    await page.click("#Login")

    await page.waitForTimeout(10000)

    const title = await page.title()
    console.log("The title of the current page: "+ title)
})