import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'typography-heading',
  styleUrl: 'typography-heading.css',
  shadow: true,
})
export class TypographyHeading {
  @Prop() color: 'primary' | 'accent' | 'gray' = 'primary';
  @Prop() size: 'medium' | 'big' = 'medium';

  render() {
    return (
      <Host>
        <h1
          class={{
            [`heading__size--${this.size}`]: true,
            [`heading__color--${this.color}`]: true,
          }}
        >
          <slot></slot>
        </h1>
      </Host>
    );
  }
}
