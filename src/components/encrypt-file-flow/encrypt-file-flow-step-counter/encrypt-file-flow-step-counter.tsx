import { Component, h, Prop } from '@stencil/core';

const TOTAL_STEPS = 3;

@Component({
  tag: 'encrypt-file-flow-step-counter',
  styleUrl: 'encrypt-file-flow-step-counter.css',
  shadow: true,
})
export class StepCounter {
  @Prop() count: number;

  render() {
    return (
      <span>
        Step {this.count}/{TOTAL_STEPS}
      </span>
    );
  }
}
