const{test,expect} = require("@playwright/test")
test("Validate the clickable add", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Entry Ad']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/entry_ad")

    await page.locator("//p[normalize-space() = 'Close']").click()

    await page.locator("//a[@id='restart-ad']").click()

    await page.locator("//p[normalize-space() = 'Close']").click()

    await expect(page.locator("//h3[normalize-space()='Entry Ad']")).toBeVisible("Entry Ad")
    
})