const{test,expect} = require("@playwright/test")
test("Broken images", async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator("//a[normalize-space()='Broken Images']").click()
    
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/broken_images")

    const image1 = page.locator("//img[@src='asdf.jpg']");
    const image2 = page.locator("//img[@src='hjkl.jpg']");
    const image3 = page.locator("//img[@src='img/avatar-blank.jpg']");

    const width1 = await image1.evaluate(el => el.naturalWidth);
    const width2 = await image2.evaluate(el => el.naturalWidth);
    const width3 = await image3.evaluate(el => el.naturalWidth);

    console.log(width1 === 0 ? "Image1 is Broken" : "Image1 is Loaded");
    console.log(width2 === 0 ? "Image2 is Broken" : "Image2 is Loaded");
    console.log(width3 === 0 ? "Image3 is Broken" : "Image3 is Loaded");

    await expect(page).toHaveURL("https://the-internet.herokuapp.com/broken_images")

    await page.waitForTimeout(3000)

    
})

