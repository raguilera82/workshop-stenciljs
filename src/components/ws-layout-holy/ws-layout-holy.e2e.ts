import { newE2EPage } from '@stencil/core/testing';

describe('ws-layout-holy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ws-layout-holy></ws-layout-holy>');

    const element = await page.find('ws-layout-holy');
    expect(element).toHaveClass('hydrated');
  });
});
