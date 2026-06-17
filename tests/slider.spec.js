const{test,expect} = require("@playwright/test")
test("Validate the slider",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Horizontal Slider']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/horizontal_slider")

    const slider = await page.locator("//input[@type = 'range']")
    const value = page.locator("#range")
    await slider.focus()

    for(let i = 0; i<3; i++){
        await page.keyboard.press("ArrowRight")
    }

    await expect(value).toHaveText("1.5")

    await page.waitForTimeout(3000)
    
    
})