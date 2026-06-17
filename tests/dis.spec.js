//Redirect buttons
const{test,expect} = require("@playwright/test")
test("Validate redirection button",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Disappearing Elements']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/disappearing_elements")

    //Home page redirection
    await page.locator("//a[normalize-space() = 'Home']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/")

    //About-Us page redirection
    //await page.locator("//a[normalize-space() = 'About']").click()
    //await expect(page).toHaveURL("https://the-internet.herokuapp.com/about/")


    
})