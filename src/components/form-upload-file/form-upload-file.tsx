import { Component, Host, h, getAssetPath, State, Prop } from '@stencil/core';

const MAX_ALLOWED_FILE_SIZE = 1048576;

@Component({
  tag: 'form-upload-file',
  styleUrl: 'form-upload-file.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class FormUploadFile {
  @Prop() file: File;
  private fileInputEl?: HTMLInputElement;

  isInValidFileType = name => name.split('.').pop() !== 'txt';
  isMoreThan1Mb = (size: number) => size > MAX_ALLOWED_FILE_SIZE;

  validateFile = (file: File) => {
    const errors = {
      invalidFileType: this.isInValidFileType(file.name),
      isMoreThan1Mb: this.isMoreThan1Mb(file.size),
    };
    const isValidFile = !(errors.invalidFileType && errors.isMoreThan1Mb);
    return [isValidFile, errors];
  };

  render() {
    const plusIconSrc = getAssetPath('../assets/icon/plus.svg');

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
            // console.log(el.files[0].name);
            const file = el.files[0];
            // TODO: only one file is allowed
            // validations
            const [isValid, errors] = this.validateFile(file);
            // is not valid
            // console.log({ isValid, errors });
            // then hightlight errors accordingly
            //
            if (!isValid) {
              // TODO: make the required ones red
              this.file = null;
            } else {
              this.file = file;
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
}
