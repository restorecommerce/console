import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-index',
  template: `
    <div>
      <h2>Management</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementComponent {}
