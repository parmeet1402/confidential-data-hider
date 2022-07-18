import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'encrypt-flow-step-three',
  styleUrl: 'encrypt-flow-step-three.css',
  shadow: true,
})
export class EncryptFlowStepThree {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
