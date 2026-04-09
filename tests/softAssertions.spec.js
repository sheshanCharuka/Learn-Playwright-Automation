const {test, expect} = require('@playwright/test')

test('SoftAssertions', async ({page}) =>{
    await page.goto("https://demoblaze.com/index.html")

    //Hard Assertion
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(page.locator("#nava")).toBeVisible()
    
    //soft assertion
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator("#nava")).toBeVisible()

}
)