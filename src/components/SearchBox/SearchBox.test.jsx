const puppeteer = require('puppeteer');
describe('Searching', () => {
    // beforeAll(async () => {
    //     await page.goto('http://localhost:3000');
    // })

    test('should search successfully', async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();

    await page.waitForSelector('#searchBox');
    await page.focus('#searchBox');

    await page.type('');

    await page.press('Enter');
    await page.click('.search-button');
    await page.waitForNavigation();

    browser.close();
    })  
})

//await page.focus('input[name=searchBox]')
// await page.keyboard.type('92804');
// await page.keyboard.press("Enter");

// const searchButton = await page.$('input[name=searchBox]');
// await searchButton.click();

