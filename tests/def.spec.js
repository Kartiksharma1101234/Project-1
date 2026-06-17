const{test,expect} = require("@playwright/test")
test("Defiantion of A/B testing", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/")  //LOCATE TO URL

    await page.locator("//a[normalize-space()='A/B Testing']").click() //Access the A/B link

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/abtest") //Verify the end link

    await page.waitForTimeout(3000) //Wait for the locator to view page
    
})