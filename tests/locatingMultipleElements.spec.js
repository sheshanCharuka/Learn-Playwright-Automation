const {test, expect} = require('@playwright/test');

test("LocateMultipleElements", async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
        //$$is used for locate multiple elements
/*    const links = await page.$$("a");  //locate all the anchor tags on the page and store them in an array

    for(const link of links)
    {
        const linktext = await link.textContent();
        console.log(linktext);  //print the text content of each link
    }
*/
    page.waitForSelector("//div[@id='tbodyid']//div//h4")  //wait for the product list to load before locating the elements 
   
    //Product list in the page
    const products = await page.$$("//div[@id='tbodyid']//div//h4");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);

    }

})