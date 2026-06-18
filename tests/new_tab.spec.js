
const{test,expect}= require("@playwright/test")
const { executionAsyncId } = require("node:async_hooks")
test("Validate the new tab", async function ({page,context}) {
    await page.goto("https://the-internet.herokuapp.com/")

    await page.locator("//a[normalize-space()='Multiple Windows']").click()

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/windows")

    const[newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//a[normalize-space()='Click Here']").click()
    ]);
    await newTab.waitForLoadState()
    await expect(newTab).toHaveURL("https://the-internet.herokuapp.com/windows/new")

    
    
})