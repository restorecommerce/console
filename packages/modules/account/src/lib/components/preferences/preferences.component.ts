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
      <div class="row">
        <div class="col rc-page-container">
          <rc-account-localization-data
            [user]="vm.user"
            [isRequesting]="vm.isRequesting"
            [localizationFormSchema]="localizationFormSchema"
          />
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent implements OnInit {
  localizationFormSchema!: VCLFormFieldSchemaRoot;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$,
    isRequesting: this.accountFacade.isRequesting$,
    locales: this.localeFacade.all$,
    timezones: this.timezoneFacade.all$,
  }).pipe(
    startWith({
      user: null,
      isRequesting: false,
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
    this.localeFacade.read({});
    this.timezoneFacade.read({});
  }
}
