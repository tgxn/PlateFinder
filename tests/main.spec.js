import { test, expect } from "@playwright/test";

import { takeScreenshot } from "./test.utils";

const REACT_URL = "http://127.0.0.1:3011";

test("test simple search", async ({ page }) => {
  await page.goto(REACT_URL);
  await page.getByPlaceholder("WA · 123A").fill("1zss222");

  await takeScreenshot(page, "Dealer");
});
