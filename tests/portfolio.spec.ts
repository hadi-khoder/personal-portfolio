import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

for (const width of [320, 390, 768, 1440]) {
  test(`Portfolio layout, links and accessibility at ${width}px`, async ({ page, request }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Hadi Khoder.");
    const portrait = page.getByAltText("Hadi Khoder wearing a suit at his graduation");
    await expect(portrait).toBeVisible();
    await expect.poll(() => portrait.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    for (const text of ["MSc Computing, Cyber Security", "Arab Open University", "BSc Computer Science", "Lebanese International University", "Introduction to Networks", "Network Security", "Cisco Networking Academy"]) {
      await expect(page.locator("#education")).toContainText(text);
    }
    await expect(page.locator(".project-card")).toHaveCount(5);
    for (const card of await page.locator(".project-card").all()) await expect(card).toHaveCSS("opacity", "1");
    await expect(page.locator(".project-card .status, .status-development, .status-unconfirmed, .status-completed")).toHaveCount(0);
    await expect(page.locator("#projects")).not.toContainText(/In development|Status unconfirmed|Completed/i);
    await expect(page.locator(".project-visual .flow-map")).toHaveCount(5);
    await expect(page.locator(".project-card img")).toHaveCount(0);
    await expect(page.locator(".project-contributions")).toHaveCount(2);
    await expect(page.locator(".project-links")).toHaveCount(0);

    if (width <= 720) {
      const menu = page.locator('button[aria-controls="main-navigation"]');
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(menu).toBeFocused();
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await menu.click();
      await page.getByRole("navigation").getByRole("link", { name: "Education" }).click();
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await expect(page).toHaveURL(/#education$/);
    }

    await page.locator(".details-toggle").first().click();
    await expect(page.locator(".details-toggle").first()).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#details-kidsmug")).toContainText("Challenge");
    await page.locator(".details-toggle").first().click();
    await expect(page.locator("#details-kidsmug")).toBeEmpty();

    for (const section of ["home", "about", "experience", "projects", "skills", "education", "contact"]) {
      await page.locator(`#${section}`).scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }

    for (const href of ["https://github.com/hadi-khoder", "https://www.linkedin.com/in/hadi-khoder-90b07837b/", "https://wa.me/96171608790"]) {
      const links = page.locator(`a[href="${href}"]`);
      await expect(links).toHaveCount(2);
      for (const link of await links.all()) {
        await expect(link).toHaveAttribute("target", "_blank");
        await expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
    await expect(page.locator('a[href="mailto:khoderhadi90@gmail.com"]')).toHaveCount(2);
    await expect(page.locator('a[href="tel:+96171608790"]')).toBeVisible();
    await expect(page.locator('a[href=""],a[href="#"],a[href^="javascript:"]')).toHaveCount(0);
    await expect(page.locator(".whatsapp-float")).toBeVisible();

    const downloadButton = page.getByRole("link", { name: "Download resume" });
    await expect(downloadButton).toHaveAttribute("href", "/Hadi-Khoder-CV.pdf");
    const downloadEvent = page.waitForEvent("download");
    await downloadButton.click();
    const download = await downloadEvent;
    expect(download.suggestedFilename()).toBe("Hadi-Khoder-CV.pdf");
    const downloadedFile = await download.path();
    expect(downloadedFile).toBeTruthy();
    const original = await readFile("public/Hadi-Khoder-CV.pdf");
    expect(createHash("sha256").update(await readFile(downloadedFile!)).digest("hex")).toBe(createHash("sha256").update(original).digest("hex"));
    const pdf = await request.get("/Hadi-Khoder-CV.pdf");
    expect(pdf.status()).toBe(200);
    expect(pdf.headers()["content-type"]).toContain("application/pdf");

    await expect(page).toHaveTitle("Hadi Khoder | Software Engineer");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /software engineer/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);
    const socialImageUrl = new URL(await page.locator('meta[property="og:image"]').getAttribute("content") ?? "");
    const socialImage = await request.get(socialImageUrl.pathname + socialImageUrl.search);
    expect(socialImage.status()).toBe(200);
    expect(socialImage.headers()["content-type"]).toContain("image/png");
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
    expect(schema["@type"]).toBe("Person");
    expect(schema.name).toBe("Hadi Khoder");
    expect((await request.get("/robots.txt")).status()).toBe(200);

    const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(audit.violations.map(({ id, nodes }) => ({ id, elements: nodes.map((node) => node.target) }))).toEqual([]);
    expect(errors).toEqual([]);
    await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo(0, 0); });
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true });
  });
}

test("Skip navigation and menu resizing preserve keyboard access", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
});
