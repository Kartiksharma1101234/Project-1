const{test,expect} = require("@playwright/test")
test("Validate the input alert", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='JavaScript Alerts']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept("Hello my name is kartik")

    })
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

    await expect(page.locator("//p[@id='result']")).toContainText("You entered: ")

    await page.waitForTimeout(3000)

    
})