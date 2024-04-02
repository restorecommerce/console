import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

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
            [personalFormSchema]="personalFormSchema"
          />

          <rc-account-account-data
            [user]="vm.user"
            [emailFormSchema]="emailFormSchema"
            [passwordFormSchema]="passwordFormSchema"
          />

          <rc-account-account-information
            [accountInformationFormSchema]="accountInformationFormSchema"
          />

          <rc-account-account-deletion [user]="vm.user" />
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
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
