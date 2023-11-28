import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { CountryFacade } from '@console-core/state';

import { buildCountrySchema } from './jss-forms';

@Component({
  selector: 'app-module-management-country-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="my-2 rc-lv-l-heading">Form</div>
      <rc-management-country-create
        [countryFormSchema]="countryFormSchema"
        [isRequesting]="vm.isRequesting"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCreateComponent {
  countryFormSchema: VCLFormFieldSchemaRoot = buildCountrySchema({});

  readonly vm$ = combineLatest({
    country: this.countryFacade.selected$.pipe(
      tap((country) => {
        if (country && country.id) {
          this.countryFacade.setSelectedId(null);
        }
      })
    ),
    isRequesting: this.countryFacade.isRequesting$,
  });

  constructor(private readonly countryFacade: CountryFacade) {}
}
