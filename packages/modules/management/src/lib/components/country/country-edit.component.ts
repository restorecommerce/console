import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  CountryFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildCountrySchema } from './jss-forms';

@Component({
  selector: 'app-module-management-country-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="my-2 rc-lv-l-heading">Form</div>
      <rc-management-country-edit
        [id]="vm.id"
        [countryFormSchema]="countryFormSchema"
        [isRequesting]="vm.isRequesting"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryEditComponent {
  countryFormSchema!: VCLFormFieldSchemaRoot;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.countryFacade.setSelectedId(id);
      })
    ),
    country: this.countryFacade.selected$.pipe(
      tap((country) => {
        if (!country) {
          this.countryFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.countries.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((country) => {
        this.countryFormSchema = buildCountrySchema({ country });
      })
    ),
    isRequesting: this.countryFacade.isRequesting$,
  });

  constructor(
    private readonly router: Router,
    private readonly countryFacade: CountryFacade,
    private readonly routerFacade: RouterFacade
  ) {}
}
