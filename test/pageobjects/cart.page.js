const base = require('../base');
//** Accessibility Ids */
const NOKIA_LUMIA_ITEM = 'Nokia lumnia 1520';

class cartPage {   
    async expectNokiaLumiaIsExisting() { 
        const nokiaLumiaItem = await base.getElementByAccessibilityId(NOKIA_LUMIA_ITEM);
        const isExisting = await nokiaLumiaItem.isExisting();
        return isExisting;
    }
}

module.exports = new cartPage();