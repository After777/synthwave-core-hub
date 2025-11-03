from playwright.sync_api import Page, expect

def verify_logo(page: Page):
    # Go to the homepage
    page.goto("http://127.0.0.1:8081/")

    # Check that the new logo is visible
    logo = page.locator('img[alt="Rav favicon"]')
    expect(logo).to_be_visible()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")
