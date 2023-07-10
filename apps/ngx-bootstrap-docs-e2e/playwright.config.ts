import { defineConfig, devices } from '@playwright/test';
import * as process from "process";

const BASE_URL = process.env['PLAYWRIGHT_TEST_BASE_URL'] || 'http://localhost:4200/ngx-bootstrap/';
export default defineConfig({
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  workers: 3,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    headless: true
  },

  projects: [
    {
      name: 'chromium-integration',
      use: { ...devices['Desktop Chrome'] },
      testDir: './src/integration'
    },
    {
      name: 'chromium-full',
      use: { ...devices['Desktop Chrome'] },
      testDir: './src/full'
    },
    {
      name: 'chromium-all',
      use: { ...devices['Desktop Chrome'] },
      testDir: './src'
    }
  ],
});
