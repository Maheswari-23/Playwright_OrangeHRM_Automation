// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration
 * Framework: OrangeHRM Automation
 */

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  timeout: 60000,

  reporter: [
    ['html', { open: 'always' }],
    ['list']
  ],

  outputDir: 'test-results/',

  use: {

    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: false, // Change to true for CI

    viewport: { width: 1280, height: 720 },

    actionTimeout: 30000,

    navigationTimeout: 30000,

    screenshot: 'on',

    video: 'on',

    trace: 'on', // Full trace enabled

    ignoreHTTPSErrors: true,

  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});