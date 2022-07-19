import { Component, Host, h, Prop, State } from '@stencil/core';
import { encryptFile, downloadFile } from '../../utils/helpers';

@Component({
  tag: 'encrypt-flow-step-three',
  styleUrl: 'encrypt-flow-step-three.css',
  shadow: true,
})
export class EncryptFlowStepThree {
  @Prop() file: File;
  @Prop() hideWordsStr: string;
  @State() textContent: string | ArrayBuffer = ``;
  @State() isCopying: boolean;

  handleDownloadBtnClick = () => {
    // create blob
    const blob = new Blob([this.textContent], { type: 'text/plain' });

    // download file
    downloadFile(blob, `Masked ${this.file.name}`);
  };

  handleCopyBtnClick = () => {
    if (navigator.clipboard) {
      this.isCopying = true;
      navigator.clipboard.writeText(this.textContent as string).then(() => {
        setTimeout(() => {
          this.isCopying = false;
        }, 500);
      });
    }
  };

  handleFileReaderOnLoad = fileReader => {
    const output = encryptFile(fileReader.result, this.hideWordsStr);
    this.textContent = output;
  };

  componentWillLoad() {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => this.handleFileReaderOnLoad(fileReader));
    fileReader.readAsText(this.file);
  }

  render() {
    return (
      <Host>
        <div>
          <step-counter count={3} />
          <typography-heading>Encrypted Output</typography-heading>
          <typography-text>Please view the masked out version of the file below</typography-text>
        </div>
        <div
          class={{
            'step-three__content-box': true,
            'step-three__content-box--longer': (this.textContent as string).length > 100,
          }}
        >
          {this.textContent}
        </div>
        <div class="step-three__button__row">
          <form-button onClick={this.handleDownloadBtnClick}>Download</form-button>
          <form-button variant="outline" onClick={this.handleCopyBtnClick}>
            {this.isCopying ? 'Copied!' : 'Copy'}
          </form-button>
        </div>
      </Host>
    );
  }
}
