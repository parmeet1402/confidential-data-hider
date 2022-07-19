import { newE2EPage } from '@stencil/core/testing';

describe('encrypt-file-flow-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<encrypt-file-flow-root></encrypt-file-flow-root>');

    const element = await page.find('encrypt-file-flow-root');
    expect(element).toHaveClass('hydrated');
  });
});
