// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests', // Directory containing the test files
  fullyParallel: false, // Run tests in files sequentially
  forbidOnly: !!process.env.CI, // Fail build on CI if test.only is used
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  reporter: 'html', // Report format
  use: {
    trace: 'on-first-retry', // Collect trace when retrying failed tests
    baseURL: 'https://accessintegra.com', // Web application base URL
    apiBaseURL: "https://gorest.co.in/public/v2"
  },

  projects: [
    {
      name: 'chromium', // Chromium browser configuration
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox', // Firefox browser configuration
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit', // Safari browser configuration
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
