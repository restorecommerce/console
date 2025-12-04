import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-iam-edit',
  template: ` <span>Create user</span> `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamEditComponent {}
