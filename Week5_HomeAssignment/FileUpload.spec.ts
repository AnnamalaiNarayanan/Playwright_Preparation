import test, { chromium, expect } from '@playwright/test'

test("File upload", async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "dilip@testleaf.com");
    await page.fill("#password", "Leaf@123");
    await page.click("//input[@id='Login']");

    await page.waitForTimeout(15000)
    await page.click("//button[@title='App Launcher']");
    await page.getByRole("button", { name: "View All" }).click();
    await page.click("//span[@part='formatted-rich-text']//*[text()='Accounts']");

    await page.waitForLoadState('load')
    await page.click("//div[@title='New']")

    await page.waitForLoadState('load')
    await page.fill("//input[@name='Name']", "Annamalai")
    await page.click("//*[text()='Rating']//parent::div//div[@class='slds-form-element__control']//button")
    await page.click("//span[text()='Warm']")

    await page.click("//*[text()='Type']//parent::div//div[@class='slds-form-element__control']//button")
    await page.click("//span[text()='Prospect']")

    await page.click("//*[text()='Industry']//parent::div//div[@class='slds-form-element__control']//button")
    await page.click("//span[text()='Banking']")

    await page.click("//*[text()='Ownership']//parent::div//div[@class='slds-form-element__control']//button")
    await page.click("//span[text()='Public']")

    await page.getByRole('button', {name: "Save", exact:true}).click()
    
    await page.waitForLoadState('load')
    expect(await page.locator("//*[@slot='primaryField']").innerText()).toBe("Annamalai")


    const uploadFile =  page.waitForEvent('filechooser')
    const up = await page.locator("//span[text()='Upload Files']")
    await up.waitFor({state:'visible'})
    await expect (up).toBeEnabled()
    await up.click()
    const resolveUploadFilePromise = await uploadFile

    await resolveUploadFilePromise.setFiles('utils/LoginData.csv')
    await page.click("//span[text()='Done']")
    expect (page.locator("//span[@data-aura-class='uiOutputText']").first()).toContainText("LoginData")

    await page.waitForTimeout(3000)

})