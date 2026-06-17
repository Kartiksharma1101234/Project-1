const{test,expect} = require("@playwright/test")
test("Validate the geolocation", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space()='Geolocation']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/geolocation")

    await page.locator("//button[normalize-space()='Where am I?']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/geolocation")

    await page.locator("//a[normalize-space()='See it on Google']").click()
    
    

    await page.waitForTimeout(3000)
    
})