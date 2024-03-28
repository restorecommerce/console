import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, filterNullish } from '@console-core/state';

import {
  buildAccountInformationSchema,
  buildEmailSchema,
  buildPasswordSchema,
  buildPersonalDataSchema,
} from '../../jss-forms';

@Component({
  selector: 'app-account-profile',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="row">
        <div class="col rc-page-container">
          <rc-account-personal-data
            [user]="vm.user"
            [isRequesting]="vm.isRequesting"
            [personalFormSchema]="personalFormSchema"
          />

          <rc-account-account-data
            [user]="vm.user"
            [isRequesting]="vm.isRequesting"
            [emailFormSchema]="emailFormSchema"
            [passwordFormSchema]="passwordFormSchema"
          />

          <rc-account-account-information
            [accountInformationFormSchema]="accountInformationFormSchema"
          />

          <rc-account-account-deletion
            [user]="vm.user"
            [isRequesting]="vm.isRequesting"
          />
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  accountInformationFormSchema!: VCLFormFieldSchemaRoot;
  emailFormSchema!: VCLFormFieldSchemaRoot;
  passwordFormSchema!: VCLFormFieldSchemaRoot;
  personalFormSchema!: VCLFormFieldSchemaRoot;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$.pipe(
      filterNullish(),
      tap((user) => {
        this.personalFormSchema = buildPersonalDataSchema({ user });
        this.emailFormSchema = buildEmailSchema({ user });
        this.passwordFormSchema = buildPasswordSchema();
        this.accountInformationFormSchema = buildAccountInformationSchema({
          user,
        });
      })
    ),
    isRequesting: this.accountFacade.isRequesting$,
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
