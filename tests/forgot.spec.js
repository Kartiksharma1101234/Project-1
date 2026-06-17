const{test,expect} = require("@playwright/test")
test("Validate the button for the forgot password",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Forgot Password']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/forgot_password")

    await page.locator("//input[@id='email']").fill("kartik1101@gmail.com")
    
    await page.keyboard.press("Enter")

    await expect(page.locator("//h1[normalize-space()='Internal Server Error']")).toHaveText("Internal Server Error")
})