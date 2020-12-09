const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://trunk.businesschain.io/');
    await page.screenshot({ path: `src/example-${browserType}.png` });
    await browser.close();
    console.log('Sucsess ' + browserType);
  }
})();