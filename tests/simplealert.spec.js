const{test,expect} = require("@playwright/test")
test("Check the simple alert", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='JavaScript Alerts']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_alerts")
    
    page.on('dialog',async dialog =>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator("//button[normalize-space()='Click for JS Alert']").click()
    
    
})