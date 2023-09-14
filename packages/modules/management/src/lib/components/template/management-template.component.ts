import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-template',
  template: `
    <rc-page-overflow>
      <router-outlet />
    </rc-page-overflow>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementTemplateComponent {}
