import { test, expect } from "@playwright/test";

test("can click button", async ({ page, browser }) => {
  console.log(browser.version());
  await page.goto("/");
  await page.getByText("Agregar").click();
  await page
    .getByLabel("Institución")
    .fill("Universidad Nacional Autónoma de México");
  await page.getByLabel("Título").fill("Curso en Psicología");
  await page.getByText("Siguiente").click();
});
