const{test,expect} = require("@playwright/test")
test("Validate the top bar", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space() = 'Exit Intent']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/exit_intent")

    await page.mouse.move(500,300)
    await page.mouse.move(500,-10)

    await expect(page.locator("//h3[normalize-space()='This is a modal window']")).toBeVisible("This is a modal window")
    await page.locator("//p[normalize-space()='Close']").click()

    await page.waitForTimeout(3000)

})