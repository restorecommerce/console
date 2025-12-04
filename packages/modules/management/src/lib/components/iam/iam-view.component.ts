import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-module-management-iam-view',
  template: ` <span>User details</span> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamViewComponent {}
