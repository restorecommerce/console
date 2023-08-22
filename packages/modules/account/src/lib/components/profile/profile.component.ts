import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade } from '@console-core/state';
import { filterNullish } from '@console-modules/shared';

import {
  buildAccountInformationSchema,
  buildEmailSchema,
  buildPasswordSchema,
  buildPersonalDataSchema,
} from '../../jss-forms';

@Component({
  selector: 'app-account-profile',
  template: `
    <ng-container *ngIf="vm$ | async"></ng-container>
    <rc-page-profile>
      <rc-account-personal-data [personalFormSchema]="personalFormSchema" />

      <rc-account-account-data
        [emailFormSchema]="emailFormSchema"
        [passwordFormSchema]="passwordFormSchema"
      />

      <rc-account-account-information
        [accountInformationFormSchema]="accountInformationFormSchema"
      />

      <rc-account-account-deletion />
    </rc-page-profile>
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
      tap((profile) => {
        this.personalFormSchema = buildPersonalDataSchema(profile);
        this.emailFormSchema = buildEmailSchema(profile);
        this.accountInformationFormSchema =
          buildAccountInformationSchema(profile);
      })
    ),
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
