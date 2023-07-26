import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-access-control',
  template: `
    <div>
      <h2>Access Control</h2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent {}
