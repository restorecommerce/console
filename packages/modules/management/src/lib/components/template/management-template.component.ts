import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-template',
  template: `
    <rc-page-home>
      <router-outlet />
    </rc-page-home>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementTemplateComponent {}
