
from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    # Setting a mobile viewport
    context = browser.new_context(viewport={"width": 375, "height": 812})
    page = context.new_page()
    page.goto("http://localhost:8080/")
    # Click the menu button
    page.click('[aria-label="Open menu"]')
    # Wait for animations
    time.sleep(1)
    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/mobile.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
