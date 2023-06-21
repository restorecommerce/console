import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-drawer-template',
  template: `
    <rc-page-home>
      <router-outlet></router-outlet>
    </rc-page-home>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementTemplateComponent {}
