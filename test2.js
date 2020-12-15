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




// const { webkit, devices } = require('playwright');
// const iPhone11 = devices['iPhone 11 Pro'];

// (async () => {
//   const browser = await webkit.launch({
//       headless:false
//   });
//   const context = await browser.newContext({
//     ...iPhone11,
//     locale: 'en-US',
//     geolocation: { longitude: 12.492507, latitude: 41.889938 },
//     permissions: ['geolocation']
//   });
//   const page = await context.newPage();
//   await page.goto('https://maps.google.com');
//   await page.click('text="Your location"');
//   await page.waitForRequest(/.*preview\/pwa/);
//   await page.screenshot({ path: 'colosseum-iphone.png' });
//   await browser.close();
// })();
//===========================================


// const { chromium, devices } = require('playwright');
// const pixel2 = devices['Pixel 2'];

// (async () => {
//     const browser = await chromium.launch();
//     const context = await browser.newContext({
//         viewport: pixel2.viewport,
//         userAgent: pixel2.userAgent,
//         geolocation: { longitude: 12.492507, latitude: 41.889938 },
//         // permissions: { 'https://www.google.com': ['geolocation'] }
//     });

//     const page = await context.newPage('https://maps.google.com');
//     await page.screenshot({ path: 'colosseum-android.png' });
//     await browser.close();
//     console.log(pixel2)
// })();


// const { webkit, devices } = require('playwright');
// const iPhone = devices['iPhone 6'];

// (async () => {
//   const browser = await webkit.launch({
//     headless:false
//   });
//   const context = await browser.newContext({
//     ...iPhone
//   });
//   const page = await context.newPage();
//   await page.goto('https://trunk.businesschain.io/');
//   await page.screenshot({ path: 'colosseum-iphone.png' });
//   // other actions...
//   await browser.close();
// })();