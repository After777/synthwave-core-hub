
from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    # Setting a desktop viewport
    context = browser.new_context(viewport={"width": 1280, "height": 720})
    page = context.new_page()
    page.goto("http://localhost:8080/")
    # Wait for page to load
    time.sleep(1)
    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/desktop.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
