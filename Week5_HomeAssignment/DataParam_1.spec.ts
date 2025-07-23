import test from '@playwright/test'
import dotenv from 'dotenv'
import {parse} from 'csv-parse/sync'
import fs from 'fs'

const file = process.env.envFile
dotenv.config({path:`utils/${file}.env`})
test("parsing from env file", async({page}) =>{

    const userName = process.env.LT_username as string
    const password = process.env.LT_Password as string
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", userName)
    await page.fill("#password", password)
    await page.click(".decorativeSubmit")
    await page.waitForTimeout(10000)

    await page.context().storageState({path:"utils/LeafTapsDetails.json"})

})