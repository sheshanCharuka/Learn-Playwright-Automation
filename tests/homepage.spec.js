const {test, expect} = require('@playwright/test');

test('Homepage',async({page})=>{  //async function make the code wait for the promise to resolve before moving to the next line of code
    await page.goto('https://demoblaze.com/');   //await is used to wait for the page to load before moving to the next line of code

    const pageTitle = page.title();  //get the title of the page
    console.log("Title of the page is: ", pageTitle);  //print the title of the page

    await expect(page).toHaveTitle('STORE');  //assertion to check if the title of the page is 'STORE'

    const pageURL = page.url();  //get the URL of the page
    console.log("URL of the page is: ", pageURL);  //print the URL of the page

    await page.close();  //close the page
}

)