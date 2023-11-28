import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-template',
  template: `
    <rc-page-management>
      <router-outlet />
    </rc-page-management>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementTemplateComponent {}
