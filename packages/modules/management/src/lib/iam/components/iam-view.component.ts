import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-module-management-iam-view',
  template: ` <span>User view v2</span> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamViewComponent {}
