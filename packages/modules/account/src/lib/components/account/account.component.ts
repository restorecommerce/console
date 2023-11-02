import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { AccountFacade } from '@console-core/state';

@Component({
  selector: 'app-account',
  template: `
    <ng-container *ngIf="user$ | async as user">
      <div class="row">
        <h3>
          Personal Data [<a
            [routerLink]="ROUTER.pages.main.children.profile.path"
            >Edit</a
          >]
        </h3>
        <ul>
          <li><b>First Name</b>: {{ user.firstName }}</li>
          <li><b>Last Name</b>: {{ user.lastName }}</li>
        </ul>

        <h3>
          Account Data [<a
            [routerLink]="ROUTER.pages.main.children.profile.path"
            >Edit</a
          >]
        </h3>
        <ul>
          <li><b>Username</b>: {{ user.name }}</li>
          <li><b>Email</b>: {{ user.email }}</li>
        </ul>

        <h3>
          Account Information [<a
            [routerLink]="ROUTER.pages.main.children.preferences.path"
            >Edit</a
          >]
        </h3>
        <ul>
          <li><b>User ID</b>: {{ user.id }}</li>
          <li><b>Status</b>: {{ user.active ? 'Active' : 'Not active' }}</li>
          <li><b>Timezone ID:</b> {{ user.timezoneId || '-' }}</li>
          <li><b>Locale ID</b>: {{ user.localeId || '-' }}</li>
          <li>
            <b>Role Associations</b>:
            <ul>
              <li *ngFor="let association of user.roleAssociations">
                {{ association.role }}
              </li>
            </ul>
          </li>
          <li><b>Created</b>: {{ user.meta?.created }}</li>
          <li><b>Updated</b>: {{ user.meta?.modified }}</li>
        </ul>

        <h3>Support</h3>
        <p>Contact us at support@restorecommerce.io</p>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  ROUTER = ROUTER;
  user$ = this.accountFacade.user$;
  constructor(private readonly accountFacade: AccountFacade) {}
}
