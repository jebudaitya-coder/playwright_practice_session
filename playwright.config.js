const { chromium } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: 'tests',
  timeout: 30 * 1000,
  // expect: {
  //   timeout: 10_000
  // },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    // screenshot: 'on', //only-on-failure
    // trace: 'on'//retain-on-failure
    // navigationTimeout: 15000
  },
  reporter: [['list'], ['html', { open: 'never' }]],
};
