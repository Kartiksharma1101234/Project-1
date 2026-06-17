const { test, expect } = require("@playwright/test");

test("Check the alert popup", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/");

    await page.locator("//a[normalize-space()='Context Menu']").click();

    await expect(page).toHaveURL(
        "https://the-internet.herokuapp.com/context_menu"
    );

    page.on("dialog", async dialog => {

        console.log("Alert Message:", dialog.message());

        expect(dialog.message())
            .toBe("You selected a context menu");

        await dialog.accept(); // OK button click
    });

    await page.locator("//div[@id='hot-spot']").click({
        button: "right"
    });

    await page.waitForTimeout(3000);

});