const{test,expect} = require("@playwright/test")
test("login form", async function ({page}) {
    

    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Basic Auth']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/basic_auth")

    await page.waitForTimeout(3000)
    
})