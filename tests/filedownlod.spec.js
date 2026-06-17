const{test,expect} = require("@playwright/test")
test("Validate the Downloaded file",async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space()='File Download']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/download")

    const downloadPromise = page.waitForEvent("download")

    await page.locator("//a[normalize-space()='Image1.1.jpg']").click()

    const download = await downloadPromise

    expect((await downloadPromise).suggestedFilename()).toBe("Image1.1.jpg")

    await page.waitForTimeout(3000)

    

    

    
})