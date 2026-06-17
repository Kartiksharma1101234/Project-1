const{test,expect} = require("@playwright/test")
test("Validate the dynamic controls",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Dynamic Controls']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_controls")

    await page.locator("//input[@type ='checkbox']").click()
    await page.locator("//button[normalize-space()= 'Remove']").click()

    await page.locator("//button[normalize-space()='Add']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_controls")

    await page.waitForTimeout(3000)
    
})