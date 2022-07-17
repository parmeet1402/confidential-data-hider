import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'app-encrypt-flow',
  styleUrl: 'app-encrypt-flow.css',
  shadow: true,
})
export class AppEncryptFlow {
  @State() currentStep: number = 1;

  render() {
    return (
      <Host>
        <sidebar-root currentStep={this.currentStep} />
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
            marginTop: '138px',
            marginLeft: '43px',
          }}
        >
          <span
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: this.currentStep === 1 ? '#c0eaf6' : '#858585',
            }}
          >
            Hide Words
          </span>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: this.currentStep === 2 ? '#c0eaf6' : '#858585',
            }}
          >
            Upload File
          </span>
          <span
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: this.currentStep === 3 ? '#c0eaf6' : '#858585',
            }}
          >
            Encrypted Output
          </span>
        </div> */}
        {/* <ContentContainer> */}
        {/* step one */}
        {/* step two */}
        {/* step three */}
        {/* </ContentContainer> */}
      </Host>
    );
  }
}
