const base = require('../base');
//** Accessibility Ids */
const NOKIA_LUMIA_ITEM = 'Nokia lumnia 1520';
const CART_BTN = '(//android.widget.Button[@content-desc="cart_button"])[1]';


class HomePage {   
    async selectNokiaLumia() {
        const nokiaLumiaItem = await base.getElementByAccessibilityId(NOKIA_LUMIA_ITEM);
        await nokiaLumiaItem.click();
    }

    async goToCart() { 
        const cartBtn = await base.getElementByXpath(CART_BTN);
        await cartBtn.click();
    }
}

module.exports = new HomePage();