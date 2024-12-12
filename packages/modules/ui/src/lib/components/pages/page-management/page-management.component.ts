import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-page-management',
  templateUrl: './page-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RcPageManagementComponent {}
