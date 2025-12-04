import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-template',
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ManagementTemplateComponent {}
