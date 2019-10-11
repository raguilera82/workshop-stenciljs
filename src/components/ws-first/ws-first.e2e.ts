import { newE2EPage } from '@stencil/core/testing';

describe('ws-first', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ws-first></ws-first>');
    const element = await page.find('ws-first');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ws-first></ws-first>');
    const component = await page.find('ws-first');
    const element = await page.find('ws-first >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
