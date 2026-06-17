const{test,expect} = require("@playwright/test")
test("Validate the floating buttons", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Floating Menu']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/floating_menu")

    await page.evaluate(()=> window.scrollTo(0,1500))

    await expect(page.locator("//h3[normalize-space()='Floating Menu']")).toBeVisible()

    await page.locator("//a[normalize-space()='News']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/floating_menu#news")

    await page.waitForTimeout(3000)

    
})