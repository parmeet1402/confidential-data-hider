import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'encrypt-flow-step-two',
  styleUrl: 'encrypt-flow-step-two.css',
  shadow: true,
})
export class EncryptFlowStepTwo {
  @State() file: File = null;

  render() {
    return (
      <Host>
        <div>
          <step-counter count={2} />
          <typography-heading>Upload File</typography-heading>
          <typography-text>Please add the file to be encrypted</typography-text>
        </div>
        <form
          style={{
            marginTop: '40px',
          }}
        >
          <div>
            <form-upload-file file={this.file} />
            <div>
              <p>Only .txt files are allowed</p>
              <p>Less than 1mb in size</p>
            </div>
          </div>
          <div
            // class="step-one__button__row"
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              marginTop: '2rem',
            }}
          >
            <form-button>Proceed</form-button>
          </div>
        </form>
      </Host>
    );
  }
}
