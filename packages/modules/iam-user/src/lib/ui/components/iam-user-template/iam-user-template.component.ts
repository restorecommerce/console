import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RcResourcePageLayoutComponent } from '@console/rc-ui';

import { IamUserListComponent } from '../../pages/iam-user-list/iam-user-list.component';

@Component({
  selector: 'app-module-iam-template',
  templateUrl: './iam-user-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RcResourcePageLayoutComponent, IamUserListComponent],
})
export class IamUserTemplateComponent {}
