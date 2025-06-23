import { axe } from 'jest-axe';
import type { Browser, Page } from 'puppeteer';

declare global {
  // eslint-disable-next-line no-var
  var browser: Browser;
  // eslint-disable-next-line no-var
  var page: Page;
}

describe('Homepage Accessibility Tests', () => {
  it('should have no accessibility violations', async () => {
    await page.goto('http://localhost:3000');
    const html = await page.content();
    const results = await axe(html);
    expect(results).toHaveNoViolations();
  });
});
