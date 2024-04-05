import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { CountryFacade } from '@console-core/state';

import { buildCountrySchema } from './jss-forms';

@Component({
  selector: 'app-module-management-country-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildCountrySchema({});
  create = this.countryFacade.create;

  readonly vm$ = combineLatest({
    country: this.countryFacade.selected$,
  });

  constructor(private readonly countryFacade: CountryFacade) {}
}
