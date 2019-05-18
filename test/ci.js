const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/../dist/test.html`);

  await page.waitFor("#mocha-report");

  const error = await page.evaluate(() => {
    const errorElements = document.getElementsByClassName("error");

    return [...errorElements].map(x => x.innerText).join("\n\n");
  });

  await browser.close();

  if (error !== "") {
    console.error(error);

    process.exit(1);
  }
})();
