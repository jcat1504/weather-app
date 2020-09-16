const puppeteer = require('puppeteer');

describe('Searching', () => {
    test('should search successfully', async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.click('input#searchBox')
    await page.keyboard.type("");
    await page.keyboard.press("Enter")
    // await page.waitFor(2000)

    // await page.type('');
    // const searchValue = await page.$eval('#searchBox', el => el.value)
    // console.log(searchValue);

    // await page.waitForSelector('#searchBox');
    // await page.focus('#searchBox');


    // await page.press('Enter');
    // await page.click('.search-button');
    // await page.waitForNavigation();

    await browser.close();
    })  
})