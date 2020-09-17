const puppeteer = require('puppeteer');

describe('Searching', () => {
    test('should search successfully', async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.click('input#searchBox')
    await page.keyboard.type("");
    await page.keyboard.press("Enter")

    await browser.close();
    })  
})