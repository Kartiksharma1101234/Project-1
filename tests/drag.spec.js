const{test,expect} = require("@playwright/test")
test("Validate the drag and drop", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Drag and Drop']").click()
    
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/drag_and_drop")

    const alpha = await page.locator("//div[@id = 'column-a']")
    const target = await page.locator("//div[@id = 'column-b']")

    await target.dragTo(alpha)

    await expect(page.locator("//div[@id='column-a']")).toHaveText("B")

    await page.waitForTimeout(3000)

    
})