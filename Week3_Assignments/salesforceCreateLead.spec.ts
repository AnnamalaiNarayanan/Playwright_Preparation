/* 1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the Company Name
9. Click Save and Verify Leads name created */

import { expect, test } from "@playwright/test";
import { TIMEOUT } from "dns";

test("SalesForce creat leads", async({page}) =>{
    
  await page.goto("https://login.salesforce.com");

  await page.fill("#username", "dilip@testleaf.com");
  await page.fill("#password", "Leaf@123");
  await page.click("//input[@id='Login']");

  await page.waitForLoadState('load')
  await page.waitForSelector("//button[@title='App Launcher']")

  await page.locator("//button[@title='App Launcher']").waitFor({ state: "visible", timeout: 40000 });
  await page.click("//button[@title='App Launcher']");

  await page.getByRole("button", { name: "View All" }).click();
  await page.locator("//p[text()='Sales']").waitFor({ state: "visible", timeout: 15000 });
  await page.click("//p[text()='Sales']");

  await page.locator("//a[@title='Leads']").waitFor({ state: "visible", timeout: 15000 });
  await page.click("//a[@title='Leads']");

  const newLeads = "//a[@title='New']"
  await page.waitForSelector(newLeads)
  await page.locator("//a[@title='New']").waitFor({state: 'visible', timeout:10000})
  page.locator(newLeads).click()
  
  await page.waitForLoadState('load')

  await page.click("//button[@name='salutation']")
  await page.click("//div[@aria-label='Salutation']//span[text()='Mr.']")
    
  const lastName = "Annamalai"
  await page.getByPlaceholder("Last Name").fill(lastName)
  await page.fill("//input[@name='Company']", "Testleaf")

  await page.click("//button[text()='Save' and @aria-disabled='false']", {timeout:10000})

  await page.waitForLoadState('load')
  await page.waitForSelector("//*[@slot='primaryField']"); 
  const leadName = page.locator("//*[@slot='primaryField']");
  await expect.soft(leadName).toContainText(lastName);
})