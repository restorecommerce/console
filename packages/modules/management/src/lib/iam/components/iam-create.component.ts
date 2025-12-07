import { ChangeDetectionStrategy, Component } from '@angular/core';

import { JssFormService } from '../services';

@Component({
  selector: 'app-module-management-iam-create',
  template: ` <span>Create a user</span> `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamCreateComponent {}
