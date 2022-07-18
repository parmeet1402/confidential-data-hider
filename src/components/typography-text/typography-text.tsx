import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'typography-text',
  styleUrl: 'typography-text.css',
  shadow: true,
})
export class TypographyText {
  @Prop() color: 'primary' | 'accent' | 'gray' | 'warning' | 'success' = 'gray';
  @Prop() size: 'small' | 'medium' = 'medium';

  render() {
    return (
      <Host>
        <span
          class={{
            [`text__color--${this.color}`]: true,
            [`text__size--${this.size}`]: true,
          }}
        >
          <slot></slot>
        </span>
      </Host>
    );
  }
}
