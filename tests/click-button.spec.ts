import { test, expect } from "@playwright/test";

test("can click button", async ({ page, browser }) => {
  // 18.0
  console.log(browser.version());
  await page.goto("/first");
  await page.getByLabel("Nombre completo").fill("John Doe");
  await page.getByText("Siguiente").click();
  //await page.getByLabel("Español").check();
  //await page.getByLabel("Correo electrónico").check();
  await page.waitForURL((url) => url.pathname.includes("/second"));
  await page.getByText("Agregar").click();
  await page
    .getByLabel("Institución")
    .fill("Universidad Nacional Autónoma de México");
  await page.getByLabel("Título").fill("Curso en Psicología");
  await page.getByText("Siguiente").click();
});
