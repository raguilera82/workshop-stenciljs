import { newE2EPage } from '@stencil/core/testing';

describe('index-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<index-page></index-page>');

    const element = await page.find('index-page');
    expect(element).toHaveClass('hydrated');
  });
});
