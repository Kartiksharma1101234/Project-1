const{test,expect} = require("@playwright/test")
test("Validate the hover", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Hovers']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/hovers")

    await page.locator("//div[@class='example']//div[1]//img[1]").hover()

    await page.locator("(//a[normalize-space() = 'View profile'])[1]").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/users/1")

    
})