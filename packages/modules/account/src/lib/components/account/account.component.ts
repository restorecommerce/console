import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { AccountFacade } from '@console-core/state';

@Component({
  selector: 'app-account',
  template: `
    <ng-container *ngIf="user$ | async as user">
      <div class="row">
        <div class="col rc-page-container">
          <h3>
            Personal Data [<a
              [routerLink]="
                ROUTER.pages.main.children.account.children.profile.path
              "
              >Edit</a
            >]
          </h3>
          <ul>
            <li><b>First Name</b>: {{ user.firstName }}</li>
            <li><b>Last Name</b>: {{ user.lastName }}</li>
          </ul>

          <h3>
            Account Data [<a
              [routerLink]="
                ROUTER.pages.main.children.account.children.profile.path
              "
              >Edit</a
            >]
          </h3>
          <ul>
            <li><b>Username</b>: {{ user.name }}</li>
            <li><b>Email</b>: {{ user.email }}</li>
          </ul>

          <h3>
            Account Information [<a
              [routerLink]="
                ROUTER.pages.main.children.account.children.preferences.path
              "
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
            <li><b>Created</b>: {{ user.meta.created }}</li>
            <li><b>Updated</b>: {{ user.meta.modified }}</li>
          </ul>

          <h3>Support</h3>
          <p>Contact us at support&#64;restorecommerce.io</p>
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AccountComponent implements OnInit {
  ROUTER = ROUTER;
  user$ = this.accountFacade.user$;

  constructor(
    private readonly router: Router,
    private readonly accountFacade: AccountFacade
  ) {}

  ngOnInit(): void {
    this.router.navigate(
      ROUTER.pages.main.children.account.children.profile.getLink()
    );
  }
}
