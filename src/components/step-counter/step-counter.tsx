import { Component, Host, h, Prop } from '@stencil/core';

const TOTAL_STEPS = 3;

@Component({
  tag: 'step-counter',
  styleUrl: 'step-counter.css',
  shadow: true,
})
export class StepCounter {
  @Prop() count: number;

  render() {
    return (
      <Host>
        Step {this.count}/{TOTAL_STEPS}
      </Host>
    );
  }
}
