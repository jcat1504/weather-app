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
  test(`h1 loads correctly`, async() => {
    let browser = await puppeteer.launch({})
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.graph-container');

    const html = await page.evaluate(el => el.textContent, element);
    expect(html).toBe('<span>Temperature variation over 7 days.</span>');
    browser.close();
  }
   );
  })

  // test(`h1 loads properly`, async () => {
  //   const browser = await puppeteer.launch()
  //   const page = await browser.newPage()
  //   await page.goto('http://localhost:3000/')
  //   const url = await page.$eval('.graph-container', document.querySelector('.graph-container'))
  //   console.log(url)
  //   await browser.close()
  // })