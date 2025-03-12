import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro

test.describe('Layout & Routing', () => {
  test('visits the app root url', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toHaveText('Vue Demo')
    await expect(page.locator('h2')).toHaveText('Links to documentation')

    await expect(page.locator('nav')).toHaveCount(1)
    await expect(page.locator('nav a').first()).toHaveText('Home')
    await expect(page.locator('nav a').first()).toHaveClass(/(^|\s)text-red-800(\s|$)/)
    await expect(page.locator('nav a').nth(1)).not.toHaveClass(/(^|\s)text-red-800(\s|$)/)

    await expect(page.locator('header')).toHaveCount(1)
    await expect(page.locator('main')).toHaveCount(1)
    await expect(page.locator('footer')).toHaveCount(1)
  })

  test('visits the fundamentals url', async ({ page }) => {
    await page.goto('/fundamentals')
    await expect(page.locator('h2').first()).toHaveText('Template Syntax')

    await expect(page.locator('nav a').first()).not.toHaveClass(/(^|\s)text-red-800(\s|$)/)
    await expect(page.locator('nav a').nth(1)).toHaveClass(/(^|\s)text-red-800(\s|$)/)
  })
})

test.describe('State page', () => {
  test('use the count composable', async ({ page }) => {
    await page.goto('/state')
    await expect(page.locator('h2').first()).toHaveText('Reactivity')

    await expect(page.locator('[data-testid="count-composable-count"]').nth(0)).toHaveText('0')
    await expect(page.locator('[data-testid="count-composable-count"]').nth(1)).toHaveText('0')
    await page.locator('[data-testid="count-composable-increment"]').nth(0).click()
    await expect(page.locator('[data-testid="count-composable-count"]').nth(0)).toHaveText('1')
    await expect(page.locator('[data-testid="count-composable-count"]').nth(1)).toHaveText('0')
    await page.locator('[data-testid="count-composable-increment"]').nth(1).click()
    await expect(page.locator('[data-testid="count-composable-count"]').nth(0)).toHaveText('1')
    await expect(page.locator('[data-testid="count-composable-count"]').nth(1)).toHaveText('1')
  })

  test('use the count store', async ({ page }) => {
    await page.goto('/state')

    await expect(page.locator('[data-testid="count-store-count"]').nth(0)).toHaveText('0')
    await expect(page.locator('[data-testid="count-store-count"]').nth(1)).toHaveText('0')
    await page.locator('[data-testid="count-store-increment"]').nth(0).click()
    await expect(page.locator('[data-testid="count-store-count"]').nth(0)).toHaveText('1')
    await expect(page.locator('[data-testid="count-store-count"]').nth(1)).toHaveText('1')
    await page.locator('[data-testid="count-store-increment"]').nth(1).click()
    await expect(page.locator('[data-testid="count-store-count"]').nth(0)).toHaveText('2')
    await expect(page.locator('[data-testid="count-store-count"]').nth(1)).toHaveText('2')
  })
})
