const{test,expect} = require("@playwright/test")
test("Add and Delete the document", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/") 

    await page.locator("//a[normalize-space()='Add/Remove Elements']").click() 
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/add_remove_elements/")  
    
    await page.locator("//button[normalize-space()='Add Element']").click()
    await page.locator("//button[normalize-space()='Add Element']").click()
    await page.locator("//button[normalize-space()='Add Element']").click()

    while(await page.locator("button.added-manually").count()>0){
        await page.locator("button.added-manually").first().click()
    }
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/add_remove_elements/")

    await page.waitForTimeout(3000)



})