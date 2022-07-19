import { Component, Host, h, Prop, State } from '@stencil/core';
import { encryptFile } from '../../utils/helpers';

const textContent: string = `Lorem ipsum text and moreooooo....dfnkldkfn jkdnjkdnfjkd ajkfadlkf jdsakfj kldasjf kdasklf jndlkas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum
text and moreo oooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj
fdjjfjff dfddfdfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf
kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk
ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj
kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and
moreoo ooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and more
ooooo.... Lorem ipsum text and moreooooo....dfnkldkfn jkdnjkdnfjkd ajkfadlkf jdsakfj kldasjf kdasklf jndlkas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf
Lorem ipsum text and moreo oooo.... Lorem ipsum text and moreo oooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf
dkfjdkj fdjjfjff dfddfdfdf Lorem ipsum text and moreoo ooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas
jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and moreooooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf
jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text and moreooooo....dfnkldk
fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and moreooooo.... Lorem ipsum text
and moreoo ooo....dfnkldk fnjkdnj kdn fjkd ajkfadlkf jdsakfjk ldasjfkdaskl fjndl kas jfkdlajf kldajfkdjs kfjdkf dkjf dkfjdkj fdjjfjff dfddf dfdf Lorem ipsum text and more
ooooo....`;

const download = (blob, fileName) => {
  let url = URL.createObjectURL(blob);
  let div = document.createElement('div');
  let anch = document.createElement('a');

  document.body.appendChild(div);
  div.appendChild(anch);

  anch.innerHTML = '&nbsp;';
  div.style.width = '0';
  div.style.height = '0';
  anch.href = url;
  anch.download = fileName;

  let ev = new MouseEvent('click', {});
  anch.dispatchEvent(ev);
  document.body.removeChild(div);
};

@Component({
  tag: 'encrypt-flow-step-three',
  styleUrl: 'encrypt-flow-step-three.css',
  shadow: true,
})
export class EncryptFlowStepThree {
  @Prop() file: File;
  @Prop() hideWordsStr: string;
  @State() textContent: string | ArrayBuffer = '';

  // @Prop() nextStep: () => void;

  // constructor() {
  //   this.watchPropHandler = this.watchPropHandler.bind(this);
  // }

  componentWillLoad() {
    let fr = new FileReader();
    // let text;
    console.log(this.hideWordsStr);
    fr.addEventListener('load', () => {
      // console.log(fr.result);
      console.log({ result: fr.result, hideStr: this.hideWordsStr, this: this });
      const output = encryptFile(fr.result, this.hideWordsStr);
      console.log({ output });
      this.textContent = output;
    });
    // fr.onload = function () {
    //   // sooooo whaever gets processed will eb shown here
    //   return fr.result;
    //   // console.log(fr.result);
    // };
    fr.readAsText(this.file);
  }

  // Watcher will view the file and update the state accordingly by reading it's content
  // @Watch('file')
  // watchPropHandler(newFile: File, oldFile: File) {
  //   // Create a file reader
  //   let fr = new FileReader();
  //   fr.onload = function () {
  //     // sooooo whaever gets processed will eb shown here
  //     // this.textContent = fr.result;
  //     // console.log(fr.result);
  //     // TODO: later add the utility method to process it out as per the hideWordStr
  //     encryptFile(fr.result);
  //   };
  //   fr.readAsText(newFile);

  // After having the file reader
  // Extract contents out of it, once done with that
  // this.textContent = whatever content of file is show that

  // this.textContent = new
  // console.log('The new value of activated is: ', newValue);
  // }

  render() {
    return (
      <Host>
        <div>
          <step-counter count={3} />
          <typography-heading>Encrypted Output</typography-heading>
          <typography-text>Please view the masked out version of the file below</typography-text>
        </div>
        <div
          class=""
          style={{
            border: '2px solid #fff',
            margin: '40px 0',
            padding: '20px',
            borderRadius: '12px',
            height: '280px',
            overflowY: 'auto',
            // width: '62vw',
            width: '100%',
            maxWidth: 'fit-content',
            boxSizing: 'border-box',
          }}
        >
          {this.textContent}
        </div>
        <div class="step-three__button__row">
          <form-button
            onClick={() => {
              // TODO: create blob
              const blob = new Blob([this.textContent], { type: 'text/plain' });

              // TODO: get the name of the file
              // download file
              download(blob,`Masked ${this.file.name}`);
            }}
          >
            Download
          </form-button>
          <form-button
            variant="outline"
            onClick={() => {
              console.log('copy functionality...');
              if (navigator.clipboard) {
                navigator.clipboard.writeText(this.textContent as string).then(() => {
                  // TODO: copied to clipboard..
                  // TODO: timeout 500s to change it back to copy button
                });
              }
            }}
          >
            Copy
          </form-button>
        </div>
      </Host>
    );
  }
}
