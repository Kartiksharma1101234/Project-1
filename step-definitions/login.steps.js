const { Given } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Given("user opens the website", async function () {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto("https://example.com");

  await browser.close();
});