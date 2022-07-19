import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="app__container">
        <layout-header />
        <layout-main>
          <stencil-route url="/" component="encrypt-file-flow-root" exact={true} />
        </layout-main>
      </div>
    );
  }
}
