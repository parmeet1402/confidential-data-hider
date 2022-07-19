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
  @State() textContent: string | ArrayBuffer = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dignissimos beatae, est unde alias voluptate, exercitationem natus eum explicabo cum ducimus sit nemo fugit vero mollitia modi error, velit quam?
  Dicta officiis distinctio repellendus ullam harum facere nemo magni eius, eum quibusdam perferendis expedita, vitae optio aperiam itaque eligendi repudiandae porro ea reprehenderit officia, quis adipisci neque minima. Itaque, accusantium?
  Delectus dicta dolorem quam, architecto libero rem dolorum nesciunt ipsa a vitae tempore, voluptas ipsam! Blanditiis quod iste dolor, iure facere voluptatem fugit sint! Velit doloremque nemo sint nisi nobis.
  Quam laborum ab inventore expedita. Consectetur enim quo quod voluptatem incidunt doloremque tempora molestias repudiandae debitis sequi rem nemo libero eos magnam unde sed commodi porro, repellat itaque voluptate voluptates.
  Commodi, saepe repudiandae sapiente nostrum minima sed fugit praesentium repellat, quis accusantium, quidem veritatis sunt officiis laborum qui quod tenetur nobis beatae ducimus sit vero eius in aliquam velit? Repellat.
  Magni, rerum earum voluptatibus quidem quia corrupti exercitationem sunt necessitatibus dolorem inventore debitis, quae dignissimos quisquam tempora? Laudantium repellendus perspiciatis ipsa magni, quo nemo sed voluptate maxime odit explicabo vero.
  Minima quis, esse sequi nihil illum, quae ex odio autem non quo quam dolorem nisi voluptates deserunt laboriosam modi veritatis numquam itaque? Illo fuga quam rerum mollitia quaerat id quidem.
  Ab laborum vero repellat perspiciatis sapiente libero explicabo similique quisquam praesentium labore? Rerum velit consequatur corporis neque, harum quidem accusantium ipsa culpa consectetur aliquam laboriosam consequuntur, labore dolorum totam eos.
  Dolor tempora similique consequatur temporibus minima non animi neque deserunt necessitatibus, nostrum in ad cum quam error! Sint eligendi amet voluptatem expedita blanditiis maxime neque nemo odio? Alias, nemo soluta!
  Inventore quam eum explicabo ducimus nobis aliquid quae natus assumenda blanditiis totam optio at accusantium pariatur suscipit iure nemo corrupti aperiam ex, error neque nisi, laborum perferendis voluptas quis! Necessitatibus.
  Illum suscipit recusandae reiciendis temporibus eligendi harum amet ad perspiciatis quaerat, laborum deserunt doloremque numquam sequi at quam dicta non corporis, asperiores aperiam vitae dignissimos quis repellat consequatur? Quasi, alias?
  Necessitatibus odit quo est facere dolor neque soluta suscipit dignissimos et iure eum hic omnis error beatae voluptatibus, quam reiciendis quos veritatis! Quibusdam repellat tenetur debitis accusamus laborum! Dolor, itaque?
  Assumenda dolorum sint quae minima praesentium provident officia tenetur, voluptatibus beatae esse cupiditate quod molestias distinctio alias illum. Perferendis molestiae ad numquam fugit. Ducimus fuga repellat impedit, aliquid voluptatum neque.
  Reprehenderit quasi asperiores tenetur laboriosam maxime. Sed perspiciatis cumque veniam autem ex esse, maxime sapiente officiis excepturi, fuga suscipit quam nulla odio quis labore, minima dolor. Totam aliquam doloremque eveniet?
  Voluptate quae est atque pariatur consectetur sequi repellat. Cum consequatur error dolorem quidem natus quae non sint et quis, est dignissimos, modi illum! Fugit nisi deserunt voluptate quod. Quod, omnis!
  Dolorem consectetur in cupiditate at beatae accusantium non repellat molestiae placeat vel aliquam deleniti iure veniam perspiciatis, necessitatibus ipsam alias distinctio pariatur dolores minima odio iusto ad quaerat nisi! Ex?
  Magni similique quasi pariatur nihil unde accusamus temporibus nam impedit ex tenetur laborum earum tempora accusantium ab sint sequi, explicabo, est ducimus sed recusandae voluptatem? Dolore quidem vel quasi at!
  Impedit, non? Culpa dignissimos perferendis eum inventore minus quia, dolores earum, voluptatibus facere assumenda commodi natus voluptatem quod magni vel, nemo sapiente ipsam. Neque corporis maxime et expedita nesciunt amet.
  Ratione necessitatibus enim doloremque, laboriosam architecto velit ullam quos perspiciatis provident quisquam, cupiditate beatae eum? Excepturi non eligendi adipisci exercitationem molestias sapiente minus necessitatibus perferendis? Aut quis officia asperiores aspernatur?
  Repudiandae asperiores, nulla amet atque suscipit illum iste perspiciatis commodi veniam sint? Nulla, dicta asperiores labore quae perferendis magnam debitis tenetur nobis, aperiam quam itaque praesentium beatae reprehenderit ipsum natus.
  `;
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
