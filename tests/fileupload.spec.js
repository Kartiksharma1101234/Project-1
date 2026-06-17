const{test,expect} = require("@playwright/test")
test("Validate the upload of file",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'File Upload']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/upload")

    await page.locator("//input[@id='file-upload']").setInputFiles(["C:/Users/KARTIK037/Pictures/Screenshots/Screenshot 2026-02-05 135309.png",
        
    ])

    await page.locator("//input[@id='file-submit']").click()

    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")

    await page.waitForTimeout(3000)
    
})