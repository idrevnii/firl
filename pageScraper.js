const scraperObject = {
  url: "https://vk.com/search?c%5Bgroup%5D=122103467&c%5Bsection%5D=people",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.waitForSelector("#page_layout");
    let urls = await page.$$eval("div", (links) => {
      links = links.filter((link) => link.querySelector("#results"));
      links = links.map(
        (el) => el.querySelector(".info > .labeled.name > a").href
      );
      return links;
    });
    console.log(urls);
  },
};

module.exports = scraperObject;
