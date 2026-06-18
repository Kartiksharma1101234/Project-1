const{test,expect} = require("@playwright/test")
test("Validate the key press", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Key Presses']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/key_presses")

    await page.locator("//input[@id='target']").click()

    await page.keyboard.press("Control")

    await expect(page.locator("//p[@id='result']")).toHaveText("You entered: CONTROL")
    
})