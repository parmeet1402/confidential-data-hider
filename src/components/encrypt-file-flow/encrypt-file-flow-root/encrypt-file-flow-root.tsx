import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'encrypt-file-flow-root',
  styleUrl: 'encrypt-file-flow-root.css',
  shadow: true,
})
export class EncryptFileFlowRoot {
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
      <div class="apps-encrypt-flow">
        <layout-sidebar currentStep={this.currentStep} />
        <div class="step__container">
          {this.currentStep === 1 && <encrypt-file-flow-step-one nextStep={this.nextStep} updateHideWordsStr={this.updateHideWordsStr} hideWordsStr={this.hideWordsStr} />}
          {this.currentStep === 2 && <encrypt-file-flow-step-two updateFile={this.updateFile} file={this.file} nextStep={this.nextStep} />}
          {this.currentStep === 3 && <encrypt-file-flow-step-three file={this.file} hideWordsStr={this.hideWordsStr} />}
        </div>
      </div>
    );
  }
}
