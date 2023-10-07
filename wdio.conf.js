exports.config = {
  port: 4723,
  path: "/wd/hub",
  runner: "local",
  specs: ["./test/specs/*.js"],
  maxInstances: 1,
  sync: false,
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "emulator-5554",
      "appium:autoGrantPermissions": true,
      "appium:autoDissmissAlerts": true,
      "appium:autoAcceptAlerts": true,
      "appium:app": "./resources/debug.apk", // path to the app
      "appium:automationName": "UiAutomator2", // Name of automation driver, essential parameter for webdriverio locators to work.
    },
  ],
  services: [
    [
      "appium",
      {
        args: {
          relaxedSecurity: true,
        },
        command: "appium",
      },
    ],
  ],
  logLevel: "debug",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    // if (!passed) {
      await browser.takeScreenshot();
    // }
  },
};
