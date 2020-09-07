import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const puppeteer = require('puppeteer');

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

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
    const html = await page.$eval('.app-instruction', e => e.innerHTML);
    expect(html).toBe('Allow Location Access or type city name/zip code in search area to get started.');
    browser.close();
  },
  16000
   );
  })

