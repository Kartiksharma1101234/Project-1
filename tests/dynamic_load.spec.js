const{test,expect} = require("@playwright/test")
test("Validate the dynamic loading",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Dynamic Loading']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_loading")

    await page.locator("//a[normalize-space() = 'Example 1: Element on page that is hidden']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_loading/1")

    await page.locator("//button[normalize-space() = 'Start']").click()

    await page.waitForTimeout(3000)

    await expect(page.locator("//h4[normalize-space()='Hello World!']")).toBeVisible("Hello World!")
    
    
})