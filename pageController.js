const pageScraper = require("./pageScraper");

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    // getURL(); todo
    const url =
      "https://vk.com/search?c%5Bgroup%5D=122103467&c%5Bsection%5D=people";
    return await pageScraper.scrapeOnePage(browser, url);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

module.exports = { scrapeAll };
