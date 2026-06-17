const{test,expect} = require("@playwright/test")
test("Validate the dropdown", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Dropdown']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dropdown")

    await page.locator("//select[@id='dropdown']").selectOption("1")

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dropdown")

    await page.waitForTimeout(3000)
    
})