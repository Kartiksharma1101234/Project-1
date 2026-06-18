const{test,expect} = require("@playwright/test")
const { error } = require("node:console")

test("Validate the console error", async function ({page}) {
    const jsError = [];
    page.on('pageerror', error =>{
        jsError.push(error.message)
        console.log('JS error caught', error.message)

    })

    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='JavaScript onload event error']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_error")

    
    await page.goto("https://the-internet.herokuapp.com/javascript_error")

    const bodyText = await page.locator("body").textContent()

    await expect(bodyText).toContain("This page has a JavaScript error in the onload event.")

    expect(jsError.length).toBeGreaterThan(0)

    
})