import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'layout-sidebar',
  styleUrl: 'layout-sidebar.css',
  shadow: true,
})
export class SidebarRoot {
  @Prop() currentStep: number;
  steps = ['Hide Words', 'Upload File', 'Encrypted Output'];

  render() {
    return (
      <div>
        <div class="sidebar-root">
          {this.steps.map((stepName, index) => (
            <layout-sidebar-list-item index={index} isActive={index + 1 === this.currentStep}>
              {stepName}
            </layout-sidebar-list-item>
          ))}
        </div>
      </div>
    );
  }
}
