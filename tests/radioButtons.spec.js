const{test,expect} = require('@playwright/test')

test('RadioButtons', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Radio Button
    await page.locator("//input[@id='male']").check()
    //await page.check("//input[@id='male']")
    await expect(await page.locator("//input[@id='male']")).toBeChecked() //assertion to check if the radio button is checked after checking it

    await page.waitForTimeout(2000) //wait for 2 seconds to see the checked radio button
})