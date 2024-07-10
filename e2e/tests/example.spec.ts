import test, { expect } from '@playwright/test'

test('测试例子', async ({ page }) => {
  // Login
  await page.goto('http://localhost:5173/login')
  await page.locator('#username').fill('testaccount')
  await page.locator('#password').fill('testpassword')
  await page.click('#login')
  await page.waitForLoadState('networkidle')
  await expect(page.getByText('Logout')).toBeVisible()
})
