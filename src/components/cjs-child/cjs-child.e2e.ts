import { newE2EPage } from '@stencil/core/testing';

describe('cjs-child', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cjs-child></cjs-child>');

    const element = await page.find('cjs-child');
    expect(element).toHaveClass('hydrated');
  });
});
