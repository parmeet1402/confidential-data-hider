import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sidebar-list-item',
  styleUrl: 'sidebar-list-item.css',
  // shadow: true,
})
export class SidebarListItem {
  @Prop() index: number;
  @Prop() isActive: boolean;

  render() {
    return (
      <Host
        class={{
          'sidebar-list__item': true,
          'sidebar-list__item--selected': this.isActive,
        }}
      >
        <slot />
      </Host>
    );
  }
}
