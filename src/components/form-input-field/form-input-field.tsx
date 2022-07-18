import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'form-input-field',
  styleUrl: 'form-input-field.css',
  // shadow: true,
})
export class FormInputField {
  render() {
    return (
      <Host>
        <input type="text" />
      </Host>
    );
  }
}
