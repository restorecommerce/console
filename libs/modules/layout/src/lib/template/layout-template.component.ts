import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-layout-template',
  template: `
    <h1>LayoutTemplateComponent</h1>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTemplateComponent {}
