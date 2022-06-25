const DEFAULT_TIME_TO_WAIT_MS = 4000;

class Base {
  async getElementByAccessibilityId(id) {
    const item = await $(`~${id}`);
    return item;
  }

  async getElementByXpath(xpath) {
    const item = await $(xpath);
    return item;
  }

  async getElementById(id) {
    const item = await $(`#${id}`);
    return item;
  }

  // Wait a certain amount of time for an element to be visible.
  async spendTime(time = DEFAULT_TIME_TO_WAIT_MS) {
    await new Promise((res) => setTimeout(res, time));
  }

  async waitForDisplayedByAccessibilityId(id) { 
    await $(`~${id}`).waitForDisplayed(20000);
  }

  setValue(id, value) {
    $(`~${id}`).setValue(value);
  }
}

module.exports = new Base();
