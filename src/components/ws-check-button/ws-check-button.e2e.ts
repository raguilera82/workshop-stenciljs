import { newE2EPage } from '@stencil/core/testing';

describe('ws-check-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ws-check-button></ws-check-button>');

    const element = await page.find('ws-check-button');
    expect(element).toHaveClass('hydrated');
  });
});
