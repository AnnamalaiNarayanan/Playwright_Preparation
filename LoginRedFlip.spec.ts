import { chromium, firefox, test } from "@playwright/test";
import { channel } from "diagnostics_channel";

test("loginPage", async() =>{

    //Launch the Edge browser for redbus application
    const browser = await chromium.launch({channel: 'msedge', headless: false})

    //open the context
    const context = await browser.newContext()

    //Open the page
    const page = await context.newPage()

    //navigate to redbus url
    await page.goto("https://www.amazon.in/")

    //wait for 5 seconds to load the url
    await page.waitForTimeout(10000)

    console.log("The current title of the page: "+ await page.title())
    console.log("The current url of the page : "+ await page.url())

    //Launch the firefox browser for flipkart url
    const browser1 = await firefox.launch({headless: true})

    //open the context of the firefox browser
    const context1 = await browser1.newContext()

    //open the page of firefox browser
    const page1 = await context1.newPage()

    //open the flipkart url
    await page1.goto("https://www.flipkart.com/")
    
    //get the title of the page
    await page1.waitForTimeout(10000)
    console.log("The title of the page flipkart: "+await page1.title())

    //get the current url of the page
    console.log("The url of the page flipkart: "+ await page1.url())

})