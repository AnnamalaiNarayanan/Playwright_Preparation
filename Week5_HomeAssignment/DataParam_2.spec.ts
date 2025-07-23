import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import data from "../../../utils/leaftap.json";

test.use({ storageState: "utils/LeafTapsDetails.json" });

const parseValue = parse(fs.readFileSync(path.join(__dirname, "../../../utils/LeafTapsDetails.csv")), {
  columns: true,
  skip_empty_lines: true
});

for (const value of parseValue) {
  for (const val of data) {
    test(`use storage state from ${value.TestcaseId} and ${val.source}`, async ({ page }) => {
      await page.goto("http://leaftaps.com/opentaps/control/login");
      await page.getByRole("link", { name: "CRM/SFA" }).click();
      await page.getByRole("link", { name: "Leads" }).click();
      await page.getByRole("link", { name: "Create Lead" }).click();

      await page.fill("#createLeadForm_companyName", value.companyName);
      await page.fill("#createLeadForm_firstName", value.firstName);
      await page.fill("#createLeadForm_lastName", value.lastName);

      await page.selectOption("#createLeadForm_dataSourceId", { label: val.source });
      await page.selectOption('[name="marketingCampaignId"]', {value:val.MarketingCampaign});
      await page.selectOption('#createLeadForm_industryEnumId', {index: Number(val.Industry)})
      await page.selectOption("#createLeadForm_currencyUomId", {value: val.Currency})
      await page.selectOption("#createLeadForm_generalCountryGeoId", {label: val.Country})
      await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {index:Number(val.Industry)})

      const count =await page.locator ('[name="marketingCampaignId"]>option').count()
      const stateCount = await page.locator('#createLeadForm_generalStateProvinceGeoId>option').count()
      
      for(let i=0;i<count;i++){
        const option = await page.locator('#createLeadForm_generalStateProvinceGeoId>option').nth(i).innerText()
        console.log("The options of states are "+option)
      }
      
      for(let i=0;i<count;i++){
        const option = await page.locator('[name="marketingCampaignId"] option').nth(i).innerText()
        console.log("The options are "+option)
      }

      await page.click(".smallSubmit")
    })
  }
}
