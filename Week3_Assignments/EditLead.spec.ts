// http://leaftaps.com/opentaps/control/main
// 1. Launch the browser
// 2. Enter the username
// 3. Enter the password
// 4. Click Login
// 5. Click CRM/SFA link
// 6. Click Leads link
// 7. Click on Create Lead
// 8. Enter company name
// 9. Enter first name
// 10.Enter last name
// 11.Click on Create Lead button
// 12.Click Edit
// 13.Change the company name
// 14.Click Update

import { test } from "@playwright/test";

test("Edit Lead in leaftaps application", async({page}) =>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.fill('#username', "DemoSalesManager")
    await page.fill('#password', "crmsfa")
    await page.click('.decorativeSubmit')

    await page.click("//*[contains(text(),'CRM/SFA')]")

    await page.click("//*[text()='Leads']")

    await page.click("//a[text()='Create Lead']")

    await page.fill("//input[@id='createLeadForm_companyName']", "TestLeaf")
    await page.fill("//input[@id='createLeadForm_firstName']", "Annamalai")
    await page.fill("//input[@id='createLeadForm_lastName']", "Narayananan")
    await page.click('.smallSubmit')

    await page.waitForLoadState('load')

    await page.click("//*[text()='Edit']")

    await page.waitForLoadState('load')
    await page.fill("//input[@id='updateLeadForm_companyName']", "TestLeafTraining")
    await page.click("//input[@value='Update']")

    
})