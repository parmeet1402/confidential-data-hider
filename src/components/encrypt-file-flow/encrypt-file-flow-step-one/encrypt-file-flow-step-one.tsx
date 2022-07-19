import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'encrypt-file-flow-step-one',
  styleUrl: 'encrypt-file-flow-step-one.css',
  shadow: true,
})
export class EncryptFlowStepOne {
  @Prop() nextStep: () => void;
  @Prop() updateHideWordsStr: (str: string) => void;
  @Prop() hideWordsStr: string;

  handleSubmit = e => {
    e.preventDefault();
    this.nextStep();
  };

  render() {
    const canProceed = !!this.hideWordsStr?.trim();

    return (
      <div>
        <div>
          <encrypt-file-flow-step-counter count={1} />
          <typography-heading>Hide Words</typography-heading>
          <typography-text>Please add the words to be hidden from the text file</typography-text>
        </div>
        <form class="step-one__form" onSubmit={this.handleSubmit}>
          <label class="step-one__input__container">
            <typography-text color="primary" size="small">
              Enter the words to be masked
            </typography-text>
            <form-input-field value={this.hideWordsStr} handleChange={this.updateHideWordsStr} />
          </label>
          <div class="step-one__button__row">
            <form-button type="submit" disabled={!canProceed} onClick={this.nextStep}>
              Proceed
            </form-button>
          </div>
        </form>
      </div>
    );
  }
}
