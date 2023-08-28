import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { LocaleFacade } from '@console-core/state';

import { buildLocalizationDataSchema } from '../../jss-forms';

@Component({
  selector: 'app-account-preferences',
  template: `
    <ng-container *ngIf="vm$ | async">
      <rc-page-preferences>
        <rc-account-localization-data
          [localizationFormSchema]="localizationFormSchema"
        />
      </rc-page-preferences>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreferencesComponent implements OnInit {
  localizationFormSchema: VCLFormFieldSchemaRoot = buildLocalizationDataSchema({
    locales: [],
    timezones: [],
  });

  readonly vm$ = combineLatest({
    // TODO: add timezones and locales
    locales: this.localeFacade.allLocales$.pipe(
      tap((locales) => {
        this.localizationFormSchema = buildLocalizationDataSchema({
          locales,
          timezones: [],
        });
      })
    ),
  });

  constructor(private readonly localeFacade: LocaleFacade) {}

  ngOnInit(): void {
    // TODO: Check if query params are needed
    this.localeFacade.localeReadRequest({
      // limit: 100,
      // offset: 0,
    });
  }
}
