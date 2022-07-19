import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'layout-sidebar-list-item',
  styleUrl: 'layout-sidebar-list-item.css',
  shadow: true,
})
export class SidebarListItem {
  @Prop() index: number;
  @Prop() isActive: boolean;

  render() {
    return (
      <div
        class={{
          'sidebar-list__item': true,
          'sidebar-list__item--selected': this.isActive,
        }}
      >
        <slot />
      </div>
    );
  }
}
