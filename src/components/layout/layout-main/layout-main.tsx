import { Component, h } from '@stencil/core';

@Component({
  tag: 'layout-main',
  styleUrl: 'layout-main.css',
  shadow: true,
})
export class LayoutMain {
  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <slot />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
