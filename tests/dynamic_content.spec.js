const{test,expect} = require("@playwright/test")
test("Validate the dynamic content",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space() = 'Dynamic Content']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_content")
    await page.locator("//a[normalize-space()= 'click here']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_content?with_content=static")

    await page.waitForTimeout(3000)

    
    
})