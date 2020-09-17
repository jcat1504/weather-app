const puppeteer = require('puppeteer');

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

describe('on page load', () => {
  test(`contains city's name`, async() => {
    let browser = await puppeteer.launch({})
    let page = await browser.newPage()

    // page.emulate({
    //   viewport: {
    //     width: 500,
    //     height: 2400,
    //   },
    //   userAgent: ''
    // })
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.navbar-container');

    const html = await page.$eval('.app-instruction', e => e.innerHTML);
    expect(html).toBe('<p>Allow Location Access or type city name/zip code in search area to get started.</p>');
    browser.close();
  }
   );
  })
