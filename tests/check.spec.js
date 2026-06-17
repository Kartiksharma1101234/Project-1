const{test,expect} = require("@playwright/test")
test("Validate the checkbox", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Checkboxes']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/checkboxes")   
    
    await page.locator("(//input[@type='checkbox'])[1]").click()
    await page.locator("(//input[@type='checkbox'])[1]").click()
    await page.locator("(//input[@type='checkbox'])[2]").click()
    await page.locator("(//input[@type='checkbox'])[2]").click()

    await page.waitForTimeout(3000)

    

    
    
    
})