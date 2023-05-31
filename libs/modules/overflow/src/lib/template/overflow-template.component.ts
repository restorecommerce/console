import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-overflow-template',
  template: `
    <h1>OverflowTemplateComponent</h1>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverflowTemplateComponent {}
