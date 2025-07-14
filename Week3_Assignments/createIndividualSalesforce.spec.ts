import { expect, test } from "@playwright/test";

test("salesfore create individuals", async({page})=>{
     await page.goto("https://login.salesforce.com");

  await page.fill("#username", "dilip@testleaf.com");
  await page.fill("#password", "Leaf@123");
  await page.click("//input[@id='Login']");

  await page.waitForSelector("//button[@title='App Launcher']")

  await page.locator("//button[@title='App Launcher']").waitFor({ state: "visible", timeout: 40000 })
  await page.click("//button[@title='App Launcher']")

  await page.getByRole("button", { name: "View All" }).click()

  const placeHolder = page.getByPlaceholder("Search apps or items...")
  await placeHolder.fill("individuals")

  await page.click("//*[@class='slds-accordion__list-item']//*[text()='Individuals']")

  await page.waitForTimeout(30000)

  await page.click("//div[@title='New']")
  const lName = "Narayananan"
  await page.getByPlaceholder("Last Name").fill(lName)
  await page.locator("//span[text()='Save']").click()

  await page.waitForLoadState('load', {timeout :45000})
  page.waitForSelector("//div[text()='Individual']//following::span[@class='uiOutputText']")
  const lastName = await page.locator("//div[text()='Individual']//following::span[@class='uiOutputText']")
  .first()
  .waitFor({ state: "visible", timeout: 45000 }); 
  const lastNameText = await page.locator("//div[text()='Individual']//following::span[@class='uiOutputText']").first().innerText()
  console.log(expect(lastNameText).toBe(lName) + " The name is matching correctly")



  
})