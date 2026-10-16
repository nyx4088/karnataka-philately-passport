// StampQuest smoke/regression suite — Playwright config
// Run against the live site by default; override with BASE_URL for local testing,
// e.g. BASE_URL=http://localhost:8080 npx playwright test
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.js',
  timeout: 60 * 1000,
  expect: { timeout: 15 * 1000 },
  fullyParallel: false, // sequential: some tests mutate app state (language, theme)
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://nyx4088.github.io/karnataka-philately-passport/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'mobile-chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 }, // phone-first: Stage 3 QA targets 375px
        hasTouch: true,
        isMobile: true,
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
        },
      },
    },
  ],
});
