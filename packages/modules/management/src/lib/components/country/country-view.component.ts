import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  CountryFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-country-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="data-list mb-0 p-0 ng-star-inserted">
        <div class="my-2 rc-lv-l-heading">Data</div>
        <ul class="data-list-body no-border">
          <li class="row data-list-item justify-between">
            <div class="flex text">Name:</div>
            <div class="flex text align-right rc-lv-label">
              {{ vm.country.name }}
            </div>
          </li>
          <li class="row data-list-item justify-between">
            <div class="flex text">Country Code:</div>
            <div class="flex text align-right rc-lv-label">
              {{ vm.country.countryCode }}
            </div>
          </li>
          <li class="row data-list-item justify-between">
            <div class="flex text">Geographical Name:</div>
            <div class="flex text align-right rc-lv-label">
              {{ vm.country.geographicalName }}
            </div>
          </li>
          <li class="row data-list-item justify-between">
            <div class="flex text">Economic Areas:</div>
            <div class="flex text align-right rc-lv-label">
              {{ (vm.country.economicAreas || []).join(', ') }}
            </div>
          </li>
        </ul>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
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
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly countryFacade: CountryFacade,
    private readonly routerFacade: RouterFacade
  ) {}
}
