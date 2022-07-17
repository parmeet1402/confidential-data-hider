import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AppRoot {
  render() {
    const fileIconSrc = getAssetPath('../assets/icon/file.svg');
    return (
      <div class="app__container">
        <header>
          <div class="icon__container">
            <img src={fileIconSrc} alt="file" />
          </div>
          <h1>Encrypt it!</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-encrypt-flow" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
