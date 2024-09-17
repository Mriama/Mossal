import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-dev.mossall.com/auth/login');
  await page.getByPlaceholder('awafall@mossal.com').click();
  await page.getByPlaceholder('awafall@mossal.com').fill('genieouzog+atos@gmail.com');
  await page.getByPlaceholder('entrer votre mot de passe').click();
  await page.getByPlaceholder('entrer votre mot de passe').fill('$Mossal1234');
  await page.getByLabel('Se souvenir de moi').check();
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByText('Administrateurs').click();
  await page.getByRole('button', { name: '+ Ajouter un admin' }).click();
  await page.getByPlaceholder('John', { exact: true }).click();
  await page.getByPlaceholder('John', { exact: true }).fill('Awa');
  await page.getByPlaceholder('Doe').click();
  await page.getByPlaceholder('Doe').fill('Thioune');
  await page.getByPlaceholder('john@gmail.com').fill('awa.thioune@hotmail.com');
  await page.getByPlaceholder('770000000').fill('777777777');
  await page.getByLabel('Adresse', { exact: true }).fill('Malika');
  await page.getByLabel('Fonction *').fill('Testeur');
  await page.getByLabel('Identifiant unique *').fill('1234');
  await page.getByLabel('Salaire *').fill('200000000');
  await page.getByLabel('N° Compte Bancaire *').fill('123456789');
  await page.getByPlaceholder('770000000').click();
  await page.getByPlaceholder('770000000').fill('777777771');
  await page.getByLabel('N° Compte Bancaire *').click();
  await page.getByLabel('N° Compte Bancaire *').fill('123456799');
  await page.getByRole('button', { name: 'Envoyé' }).click();
});