import { test, expect } from "@playwright/test";

test("can click button", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Agregar").click();
  await page.getByText("Siguiente").click();
});
