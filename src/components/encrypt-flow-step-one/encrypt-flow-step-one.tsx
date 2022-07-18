import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'encrypt-flow-step-one',
  styleUrl: 'encrypt-flow-step-one.css',
  // shadow: true,
})
export class EncryptFlowStepOne {
  render() {
    return (
      <Host>
        <div>
          <step-counter count={1} />
          <typography-heading>Hide Words</typography-heading>
          <typography-text>Please add the words to be hidden from the text file</typography-text>
        </div>
        <form class="step-one__form" style={{ marginTop: '3rem' }}>
          <label class="step-one__input__container">
            <typography-text color="primary" size="small">
              Enter the words to be masked
            </typography-text>
            <form-input-field />
          </label>
          <div class="step-one__button__row">
            <form-button>Proceed</form-button>
          </div>
        </form>
      </Host>
    );
  }
}
