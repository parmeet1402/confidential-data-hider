import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sidebar-list-item',
  styleUrl: 'sidebar-list-item.css',
  shadow: true,
})
export class SidebarListItem {
  @Prop() index: number;
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
