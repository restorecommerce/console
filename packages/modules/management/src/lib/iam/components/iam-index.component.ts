import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RsResourcePageLayoutComponent } from '@console/rs-ui';

import { UsersListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-module-management-iam-index',
  template: `
    <rs-resource-page-layout>
      <app-users-list rsResourceSidebar />

      <router-outlet rsResourceContent />
    </rs-resource-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, UsersListComponent, RsResourcePageLayoutComponent],
})
export class IamIndexComponent {}
