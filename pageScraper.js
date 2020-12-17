async function scrapeOnePage(browser, url) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  await page.waitForSelector("#page_layout");
  let urls = await page.$$eval(".info > .labeled.name > a", (links) => {
    return links.map((link) => link.href);
  });
  return urls;
}

module.exports = { scrapeOnePage };
