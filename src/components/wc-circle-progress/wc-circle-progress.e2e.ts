import { newE2EPage } from '@stencil/core/testing';

describe('wc-circle-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-circle-progress></wc-circle-progress>');

    const element = await page.find('wc-circle-progress');
    expect(element).toHaveClass('hydrated');
  });
});
