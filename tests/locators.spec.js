//{test, expest} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test ('Locators', async ({page})=>{
    await page.goto("https://demoblaze.com/")

    // click on login button
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //Provide username - css
    //await page.locator("#loginusername").fill
    await page.fill("#loginusername", "pavanol")
    //await page.type("loginusername")

    //provide password - CSS
    await page.fill("input[id='loginpassword']", "test@123")

    //Click on login button - xpath
    await page.click("//button[normalize-space()='Log in']")
    await page.click("//button[normalize-space()='Log in']")

    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible()  //assertion to check if the logout link is visible after login

    await page.close()

})