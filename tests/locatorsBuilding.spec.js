const {test, expect} = require('@playwright/test');

test('Built-inlocators',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText() - to locate am element. usually image, by its alternative text
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - to locate an element by its placeholder text
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole() - to locate an element by its role, such as button, link, etc.
    await page.getByRole('button', {type: 'submit'}).click()
   
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    //page.getByText() - to locate an element by its visible text
    await expect(page.getByText(name)).toBeVisible();

})