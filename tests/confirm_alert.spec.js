const{test,expect} = require("@playwright/test")
test("Validate the confirm alert box", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='JavaScript Alerts']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async dialog =>{
    console.log(dialog.message())
    //await dialog.dismiss()//for cancel
    await dialog.accept() // for accept
    })
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

   // await expect(page.locator("//p[@id='result']")).toContainText("Cancel")
    await expect(page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")


    
})