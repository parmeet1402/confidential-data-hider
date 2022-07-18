import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'encrypt-flow-step-two',
  styleUrl: 'encrypt-flow-step-two.css',
  shadow: true,
})
export class EncryptFlowStepTwo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
