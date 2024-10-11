import { test, expect } from '@playwright/test';

test('can click button', async ({ page }) => {
  await page.goto('/');
  await page.getByText("Add elements").click();
  await page.getByText("Test button").click();
});
