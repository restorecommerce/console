import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-index',
  template: `
    <div>
      <p>Management</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent {}
