import { Component, Host, h, getAssetPath, Prop } from '@stencil/core';

const MAX_ALLOWED_FILE_SIZE = 1048576;

@Component({
  tag: 'form-upload-file',
  styleUrl: 'form-upload-file.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class FormUploadFile {
  @Prop() file: File;
  @Prop() updateErrors: (error: { invalidFileType: boolean; isMoreThan1Mb: boolean }) => void;
  @Prop() updateFile: (file: File) => void;

  private fileInputEl?: HTMLInputElement;

  isInValidFileType = name => name.split('.').pop() !== 'txt';
  isMoreThan1Mb = (size: number) => size > MAX_ALLOWED_FILE_SIZE;

  validateFile = (
    file: File,
  ): {
    isValid: boolean;
    errors: {
      invalidFileType: boolean;
      isMoreThan1Mb: boolean;
    };
  } => {
    const errors = {
      invalidFileType: this.isInValidFileType(file.name),
      isMoreThan1Mb: this.isMoreThan1Mb(file.size),
    };
    const isValid = !(errors.invalidFileType || errors.isMoreThan1Mb);
    return { isValid, errors };
  };

  render() {
    const plusIconSrc = getAssetPath('../assets/icon/plus.svg');
    const fileIconSrc = getAssetPath('../assets/icon/file.svg');
    const timesIconSrc = getAssetPath('../assets/icon/times.svg');

    if (this.file === null) {
      return (
        <Host>
          <input
            type="file"
            hidden
            name=""
            id=""
            ref={el => (this.fileInputEl = el as HTMLInputElement)}
            onChange={e => {
              const el = e.target as HTMLInputElement;
              const file = el.files[0];
              // TODO: only one file is allowed
              // validations
              const { isValid, errors } = this.validateFile(file);
              // console.log(isValid, errors);
              if (!isValid) {
                // TODO: make the required ones red
                this.updateFile(null);
                // console.log({ errors });
                this.updateErrors(errors);
              } else {
                this.updateFile(file);
                // console.log({ errors });
                this.updateErrors(errors);
                // TODO: make the required ones green
                // TODO: set the file to green
                // TODO: make the proceed button active
                // TODO: render the delete button
                // TODO: make the UI change to that of filled version
              }
            }}
          />
          <button
            onClick={() => {
              this.fileInputEl.click();
            }}
          >
            <img src={plusIconSrc} alt="" />
          </button>
        </Host>
      );
    }
    return (
      <div class="file-upload-input--filled">
        <div class="file-icon__container">
          <img src={fileIconSrc} alt="file" />
        </div>
        <div
          class="times-icon__container"
          onClick={() => {
            this.updateFile(null);
            this.updateErrors({ invalidFileType: false, isMoreThan1Mb: false });
          }}
        >
          <img src={timesIconSrc} alt="" />
        </div>
        <typography-text class="file__name" color="primary">
          {this.file.name}
        </typography-text>
      </div>
    );
  }
}
