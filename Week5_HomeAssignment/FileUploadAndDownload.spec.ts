import { test } from "@playwright/test"

test("File upload", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.setInputFiles('#file-upload', "utils/leaftap.json")

    const fileUp = page.waitForEvent('filechooser')
    await page.click("//div[@id='drag-drop-upload']")
    const upload = await fileUp

    upload.setFiles("utils/download.jpeg")    
})

test("File download", async({page})=>{
    const download = page.waitForEvent('download')
     await page.goto("https://the-internet.herokuapp.com/download")
     await page.getByRole('link', {name:"Devops_Class1.rtf"}).click()
     const downloadFile = await download

    await downloadFile.saveAs(`downloads/${downloadFile.suggestedFilename()}`);

})