import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'encrypt-flow-step-two',
  styleUrl: 'encrypt-flow-step-two.css',
  shadow: true,
})
export class EncryptFlowStepTwo {
  @Prop() updateFile: (file: File) => void;
  @Prop() file: File;
  @Prop() nextStep: () => void;

  @State() errors = {
    invalidFileType: false,
    isMoreThan1Mb: false,
  };

  updateErrors = errors => {
    this.errors = errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.nextStep();
  };

  render() {
    return (
      <Host>
        <div>
          <step-counter count={2} />
          <typography-heading>Upload File</typography-heading>
          <typography-text>Please add the file to be encrypted</typography-text>
        </div>
        <form class="file-upload-file__form" onSubmit={this.handleSubmit}>
          <div>
            <form-upload-file file={this.file} updateErrors={this.updateErrors} updateFile={this.updateFile} />
            <div class="file-upload-file__rules-list">
              <typography-text color={this.errors.invalidFileType ? 'warning' : this.file === null ? 'gray' : 'success'}>Only .txt files are allowed</typography-text>
              <typography-text color={this.errors.isMoreThan1Mb ? 'warning' : this.file === null ? 'gray' : 'success'}>Less than 1mb in size</typography-text>
            </div>
          </div>
          <div class="step-two__button__row">
            <form-button type="submit" disabled={this.file === null}>
              Proceed
            </form-button>
          </div>
        </form>
      </Host>
    );
  }
}
