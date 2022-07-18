import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sidebar-root',
  styleUrl: 'sidebar-root.css',
  // shadow: true,
})
export class SidebarRoot {
  @Prop() currentStep: number;
  steps = ['Hide Words', 'Upload File', 'Encrypted Output'];

  render() {
    return (
      <Host>
        <div class="sidebar-root">
          {this.steps.map((stepName, index) => (
            <sidebar-list-item index={index} isActive={index + 1 === this.currentStep}>
              {stepName}
            </sidebar-list-item>
          ))}
        </div>
      </Host>
    );
  }
}
