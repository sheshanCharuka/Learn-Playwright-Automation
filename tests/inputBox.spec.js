const{test, expect} = require('playwright/test');

test('handleInputBox', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Passing value to input box
    await expect.soft(await page.locator("//input[@id='name']")).toBeVisible() //assertion to check if the input box is visible before filling it with value
    await expect.soft(await page.locator("//input[@id='name']")).toBeEmpty() //assertion to check if the input box is empty before filling it with value
    await expect.soft(await page.locator("//input[@id='name']")).toBeEditable() //assertion to check if the input box is editable before filling it with value
    await expect.soft(await page.locator("//input[@id='name']")).toBeEnabled() //assertion to check if the input box is enabled before filling it with value

    await page.locator("//input[@id='name']").fill("Sheshan")
    //await page.fill("//input[@id='name']", "Sheshan");

    await page.waitForTimeout(2000) //wait for 2 seconds to see the filled value in the input box
})
