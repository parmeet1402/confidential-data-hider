import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'app-encrypt-flow',
  styleUrl: 'app-encrypt-flow.css',
  // shadow: true,
})
export class AppEncryptFlow {
  @State() currentStep: number = 1;
  @State() hideWordsStr: string;
  @State() file: File = null;

  updateHideWordsStr = str => {
    this.hideWordsStr = str;
  };

  updateFile = file => {
    this.file = file;
  };

  nextStep = () => {
    this.currentStep = this.currentStep + 1;
  };

  render() {
    return (
      <Host class="apps-encrypt-flow">
        <sidebar-root currentStep={this.currentStep} />
        <div class="step__container">
          {this.currentStep === 1 && <encrypt-flow-step-one nextStep={this.nextStep} updateHideWordsStr={this.updateHideWordsStr} hideWordsStr={this.hideWordsStr} />}
          {this.currentStep === 2 && <encrypt-flow-step-two updateFile={this.updateFile} file={this.file} nextStep={this.nextStep} />}
          {this.currentStep === 3 && <encrypt-flow-step-three file={this.file} hideWordsStr={this.hideWordsStr} />}
        </div>
      </Host>
    );
  }
}
