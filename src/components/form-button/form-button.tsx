import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-button',
  styleUrl: 'form-button.css',
  shadow: true,
})
export class FormButton {
  @Prop() variant: 'solid' | 'outline' = 'solid';

  render() {
    return (
      <Host>
        <button
          class={{
            [`button--${this.variant}`]: true,
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
