import { Component } from '@angular/core';
import { RcResourceDetailComponent } from '@console/rc-ui';

import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

@Component({
  selector: 'app-module-iam-user-create',
  templateUrl: './iam-user-create.component.html',
  imports: [
    VCLInputModule,
    VCLSelectComponent,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    RcResourceDetailComponent,
  ],
})
export class IAMUserCreateComponent {}
