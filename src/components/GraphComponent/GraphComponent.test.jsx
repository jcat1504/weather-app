const puppeteer = require('puppeteer');

// const isDebugging = () => {
//   const debugging_mode = {
//     headless: true,
//     slowMo: 250,
//     devtools: true,
//   }
//   return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
// }

describe('on page load', () => {
  test(`span element loads properly`, async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/');
    // await page.waitForSelector('.graph-container');

     const url = await page.$eval('.graph-container', el => el.innerText)
     console.log(url)
     await browser.close()
     }); 
     }) 