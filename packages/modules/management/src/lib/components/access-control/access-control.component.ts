import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-module-management-access-control',
  template: `
    <div>
      <p>Access Control</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent {}
