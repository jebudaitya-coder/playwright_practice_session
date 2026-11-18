const { chromium } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: 'tests',
  timeout: 30 * 1000,
  // expect: {
  //   timeout: 10_000
  // },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    screenshot: 'only-on-failure', //only-on-failure
    trace: 'retain-on-failure'//retain-on-failure
    // navigationTimeout: 15000
  },
  reporter: [['list'], ['html', { open: 'never' }]],
};
