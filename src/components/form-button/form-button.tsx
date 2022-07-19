import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-button',
  styleUrl: 'form-button.css',
  shadow: true,
})
export class FormButton {
  @Prop() variant: 'solid' | 'outline' = 'solid';
  @Prop() disabled: boolean = false;
  @Prop() handleClick: () => void;

  render() {
    return (
      <button
        class={{
          [`button--${this.variant}`]: true,
        }}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <slot></slot>
      </button>
    );
  }
}
