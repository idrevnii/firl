const browser = require("./browser");
const scraperController = require("./pageController");

//Start the browser and create a browser instance
const browserInstance = browser.startBrowser();

// Pass the browser instance to the scraper controller

async function getResult(browserInstance) {
  console.log(await scraperController.scrapeAll(browserInstance));
}

getResult(browserInstance);
