const base = require('../base');
//** Accessibility Ids */
const ADD_TO_CART_BTN = 'cart_button';

class ProductViewPage {   
    async addToCart() {
        const addToCartBtn = await base.getElementByAccessibilityId(ADD_TO_CART_BTN);
        await addToCartBtn.click();
    }
}

module.exports = new ProductViewPage();