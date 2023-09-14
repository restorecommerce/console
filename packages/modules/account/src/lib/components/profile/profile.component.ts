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
      <rc-page-profile>
        <rc-account-personal-data
          [user]="vm.profile"
          [isUpdating]="vm.isUpdating"
          [personalFormSchema]="personalFormSchema"
        />

        <rc-account-account-data
          [user]="vm.profile"
          [isUpdating]="vm.isUpdating"
          [emailFormSchema]="emailFormSchema"
          [passwordFormSchema]="passwordFormSchema"
        />

        <rc-account-account-information
          [accountInformationFormSchema]="accountInformationFormSchema"
        />

        <rc-account-account-deletion
          [user]="vm.profile"
          [isDeleting]="vm.isDeleting"
        />
      </rc-page-profile>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  accountInformationFormSchema!: VCLFormFieldSchemaRoot;
  emailFormSchema!: VCLFormFieldSchemaRoot;
  passwordFormSchema = buildPasswordSchema();
  personalFormSchema!: VCLFormFieldSchemaRoot;

  readonly vm$ = combineLatest({
    profile: this.accountFacade.profile$.pipe(
      filterNullish(),
      tap((user) => {
        this.personalFormSchema = buildPersonalDataSchema({ user });
        this.emailFormSchema = buildEmailSchema({ user });
        this.accountInformationFormSchema = buildAccountInformationSchema({
          user,
        });
      })
    ),
    isLoading: this.accountFacade.isLoading$,
    isUpdating: this.accountFacade.isUpdating$,
    isDeleting: this.accountFacade.isDeleting$,
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
