const{test,expect} = require("@playwright/test")
test("Validate the iframes",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space()='Frames']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/frames")

    await page.locator("//a[normalize-space()='Nested Frames']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/nested_frames")

    await page.waitForTimeout(3000)
    
})