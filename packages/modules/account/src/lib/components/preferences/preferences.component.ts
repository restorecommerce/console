import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, startWith, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  AccountFacade,
  LocaleFacade,
  TimezoneFacade,
} from '@console-core/state';

import { buildLocalizationDataSchema } from '../../jss-forms';

@Component({
  selector: 'app-account-preferences',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-page-preferences>
        <rc-account-localization-data
          [user]="vm.user"
          [isLoading]="vm.isLoading"
          [localizationFormSchema]="localizationFormSchema"
        />
      </rc-page-preferences>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent implements OnInit {
  localizationFormSchema!: VCLFormFieldSchemaRoot;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    isLoading: this.accountFacade.isLoading$,
    locales: this.localeFacade.allLocales$,
    timezones: this.timezoneFacade.allTimezones$,
  }).pipe(
    startWith({
      user: null,
      isLoading: false,
      locales: [],
      timezones: [],
    }),
    tap(({ user, locales, timezones }) => {
      this.localizationFormSchema = buildLocalizationDataSchema({
        user,
        locales,
        timezones,
      });
    })
  );

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly localeFacade: LocaleFacade,
    private readonly timezoneFacade: TimezoneFacade
  ) {}

  ngOnInit(): void {
    this.localeFacade.localeReadRequest({});
    this.timezoneFacade.timezoneReadRequest({});
  }
}
