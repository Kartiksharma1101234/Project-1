const{test,expect} = require("@playwright/test")

test("Validate the number input field", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Inputs']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/inputs")

    await page.locator("//input[@type='number']").click()

    for(let i = 0; i<28; i++){
        await page.keyboard.press("ArrowUp")
    }

    await page.waitForTimeout(3000)

   
    
})