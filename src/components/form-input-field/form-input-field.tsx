import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-input-field',
  styleUrl: 'form-input-field.css',
  // shadow: true,
})
export class FormInputField {
  @Prop() value: string;
  @Prop() handleChange: (s: string) => void;
  // change
  render() {
    return (
      <Host>
        <input
          type="text"
          value={this.value}
          onChange={e => {
            const el = e.target as HTMLInputElement;
            this.handleChange(el.value);
          }}
        />
      </Host>
    );
  }
}
