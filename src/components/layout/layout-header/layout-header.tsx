import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'layout-header',
  styleUrl: 'layout-header.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class LayoutHeader {
  render() {
    const fileIconSrc = getAssetPath('../../../assets/icon/file.svg');
    return (
      <header>
        <div class="icon__container">
          <img src={fileIconSrc} alt="file" />
        </div>
        <h1>Encrypt it!</h1>
      </header>
    );
  }
}
