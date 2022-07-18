import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'app-encrypt-flow',
  styleUrl: 'app-encrypt-flow.css',
  // shadow: true,
})
export class AppEncryptFlow {
  @State() currentStep: number = 3;
  @State() hideWordsStr: string;

  render() {
    return (
      <Host class="apps-encrypt-flow">
        <sidebar-root currentStep={this.currentStep} />
        <div class="step__container">
          {this.currentStep === 1 && <encrypt-flow-step-one />}
          {this.currentStep === 2 && <encrypt-flow-step-two />}
          {this.currentStep === 3 && <encrypt-flow-step-three />}
        </div>
      </Host>
    );
  }
}
