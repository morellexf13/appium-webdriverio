var expect = require('chai').expect
const homePage = require('../pageobjects/home.page');
const productViewPage = require('../pageobjects/productView.page');
const cartPage = require('../pageobjects/cart.page');

describe('Verify Add to cart scenarios on Apptim app', () => {
    it('should add product to cart', async() => {
        await homePage.selectNokiaLumia();
        await productViewPage.addToCart();
        await browser.back();
        await homePage.goToCart();
        const result = await cartPage.expectNokiaLumiaIsExisting();
        expect(result).to.equal(true);
    });
});

