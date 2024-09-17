const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();

  // ---------------------
  await context.close();
  await browser.close();
})();