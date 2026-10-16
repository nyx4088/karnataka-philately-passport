// 375px screenshots: every tab, office sheet, photo viewer, Rivals sheet, Settings
// in light/dark and EN/KN. Output to docs/screenshots/.
import { test } from '@playwright/test';

const OUT = '../docs/screenshots';

test.use({ viewport: { width: 375, height: 812 } });

async function setup(page, theme, lang) {
  await page.goto('/');
  await page.waitForTimeout(2000);
  // Set theme
  if (theme === 'dark') {
    await page.click('[data-tab="settings"]');
    await page.check('#darkThemeToggle');
    await page.waitForTimeout(500);
  }
  // Set language
  if (lang === 'kn') {
    await page.click('[data-tab="settings"]');
    await page.click('#langToggle');
    await page.waitForTimeout(500);
  }
}

for (const theme of ['light', 'dark']) {
  for (const lang of ['en', 'kn']) {
    const tag = `${theme}-${lang}`;
    
    test(`screenshots ${tag} - tabs`, async ({ page }) => {
      await setup(page, theme, lang);
      for (const tab of ['explore', 'passport', 'circuits', 'rivals', 'settings']) {
        await page.click(`[data-tab="${tab}"]`);
        await page.waitForTimeout(800);
        await page.screenshot({ path: `${OUT}/${tag}-tab-${tab}.png` });
      }
    });

    test(`screenshots ${tag} - office sheet`, async ({ page }) => {
      await setup(page, theme, lang);
      await page.click('[data-tab="explore"]');
      await page.waitForTimeout(1000);
      // Click first map pin
      await page.click('.mk:not(.mk-cluster)');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `${OUT}/${tag}-office-sheet.png` });
    });
  }
}
