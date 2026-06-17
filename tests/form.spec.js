const{test,expect} = require("@playwright/test")
test("Validate the form", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Form Authentication']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login")
     
    //THIS IS FOR POSITIVE TESTING
    await page.locator("//input[@id='username']").fill("tomsmith")
    await page.locator("//input[@id='password']").fill("SuperSecretPassword!")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[@id='flash']")).toContainText(" You logged into a secure area!")
    await page.locator("//a[@class='button secondary radius']").click()
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login")
    
     
     //IF WE WANT TO CHECK WITH WRONG USER ID AND PASSWORD!!!!!!
    //await page.locator("//input[@id='username']").fill("Kartik")
    //await page.locator("//input[@id='password']").fill("123456")
    // await page.locator("//button[@type='submit']").click()
    //await expect(page.locator("//div[@id='flash']")).toContainText(" Your username is invalid!")

    await page.waitForTimeout(3000)
    
})