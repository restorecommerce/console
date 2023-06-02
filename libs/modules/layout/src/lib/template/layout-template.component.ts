import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-layout-template',
  template: `
    <rc-page-layout>
      <router-outlet></router-outlet>
    </rc-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTemplateComponent {}
