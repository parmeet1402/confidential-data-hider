import { Component, Host, h } from '@stencil/core';

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
          {textContent}
        </div>
        <div class="step-three__button__row">
          <form-button
            onClick={() => {
              // TODO: create blob
              const blob = new Blob([textContent], { type: 'text/plain' });

              // TODO: get the name of the file
              // download file
              download(blob, 'kuchbhi.txt');
            }}
          >
            Download
          </form-button>
          <form-button
            variant="outline"
            onClick={() => {
              console.log('copy functionality...');
              if (navigator.clipboard) {
                navigator.clipboard.writeText(textContent).then(() => {
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
