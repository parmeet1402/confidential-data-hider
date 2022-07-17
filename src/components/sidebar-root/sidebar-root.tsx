import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sidebar-root',
  styleUrl: 'sidebar-root.css',
  shadow: true,
})
export class SidebarRoot {
  @Prop() currentStep: number;
  steps = ['Hide Words', 'Upload File', 'Encrypted Output'];

  render() {
    return (
      <Host>
        <div class="sidebar-root">
          {this.steps.map((stepName, index) => (
            <sidebar-list-item index={index}>
              <span class="sidebar-list__item">{stepName}</span>
            </sidebar-list-item>
          ))}
        </div>
      </Host>
    );
  }
}
