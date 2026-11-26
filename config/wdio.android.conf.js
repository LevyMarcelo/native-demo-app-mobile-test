const deviceName = process.env.ANDROID_DEVICE_NAME ?? 'emulator-5554';
const appPackage = process.env.ANDROID_APP_PACKAGE ?? 'com.wdiodemoapp';

export const config = {
  runner: 'local',
  specs: ['../specs/**/*.spec.js'],
  maxInstances: 1,
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',
  logLevel: 'info',
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: './allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      addConsoleLogs: true,
      reportedEnvironmentVars: {
        Platform: 'Android',
        Device: deviceName,
        'Android API': process.env.ANDROID_API_LEVEL ?? '37',
        'App Package': appPackage,
        Node: process.version,
        Appium: process.env.APPIUM_VERSION ?? '3.9.0',
        UiAutomator2: process.env.UIAUTOMATOR2_VERSION ?? '8.7.3',
        'Execution Started (UTC)': new Date().toISOString()
      }
    }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': deviceName,
    'appium:appPackage': appPackage,
    'appium:appActivity': '.MainActivity',
    'appium:noReset': true,
    'appium:newCommandTimeout': 120,
    'appium:forceAppLaunch': true,
    'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
    'appium:appWaitDuration': 20000,
    'appium:disableWindowAnimation': true
  }],
  async beforeTest() {
    await browser.terminateApp(appPackage);
    await browser.activateApp(appPackage);

    const homeTab = await $('~Home');
    await homeTab.waitForDisplayed({ timeout: 15000 });
    await homeTab.click();
  },
  async afterTest(test, _context, { error }) {
    if (error) {
      try {
        const screenshot = await browser.takeScreenshot();
        const { default: allureReporter } = await import('@wdio/allure-reporter');
        allureReporter.addAttachment(
          `${test.title} - Failure Screenshot`, 
          Buffer.from(screenshot, 'base64'), 'image/png'
        );
      } catch (screenshotError) {
        console.error(
          `Failed to capture screenshot for "${test.title}":`, screenshotError.message
        );
      }
    }
  }
};


