const path = require("path");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--headless",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox"
      ]
    });
    const page = await browser.newPage();
    await page.goto("https://github.com/");
    await page.screenshot({ path: path.join(__dirname, "..", "dist", `screenshot_${Date.now()}.png`) });
    await browser.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
