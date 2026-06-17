const{test,expect} = require("@playwright/test")

test("Validate the hidden menues", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space()='JQuery UI Menus']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/jqueryui/menu")

    await page.locator("//a[normalize-space()='Enabled']").click()

    await page.locator("//a[normalize-space()='Downloads']").click()

    await page.locator("//a[normalize-space()='PDF']")
    
})