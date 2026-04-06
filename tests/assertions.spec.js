const {test,expect}=require('playwright/test');

test('AssertionTest',async ({page}) => {
    //open appurl
    await page.goto('https://demo.nopcommerce.com/register')

    //page url assertion
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //page title assertion
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //visible assertion
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //Check the element is enabled or not
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    //radio button or checkbox checked or not assertion

    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //checkbox
    const checkBox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(checkBox).toBeChecked()

    //element has atribute
    const submitButton = await page.locator('#register-button')
    await expect(submitButton).toHaveAttribute('type','submit')

    //element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Regi')

    //Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@example.com')
    await expect(emailInput).toHaveValue('test@example.com')

    //List of elements has given length
    await page.goto('https://demoblaze.com/index.html')
    const productItems = await page.locator('.product-item')
    await expect(productItems).toHaveCount(9)

}
)