const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();
  await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');
  await page.getByPlaceholder('entrer votre mot de passe').click();
  await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');
  await page.getByLabel('Se souvenir de moi').check();
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByText('Liste des demandes').click();
  await page.getByText('Tableau de bord').click();
  await page.getByText('arrow_drop_down').click();
  await page.getByText('Déconnexion').click();

  // ---------------------
  await context.close();
  await browser.close();
})();