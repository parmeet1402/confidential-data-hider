import { newE2EPage } from '@stencil/core/testing';

describe('app-encrypt-flow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-encrypt-flow></app-encrypt-flow>');

    const element = await page.find('app-encrypt-flow');
    expect(element).toHaveClass('hydrated');
  });
});
