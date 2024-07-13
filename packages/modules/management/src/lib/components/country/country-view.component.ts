import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
      <app-module-management-country-details [vm]="vm" />
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
        this.countryFacade.readOneById({ id });
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
    private readonly routerFacade: RouterFacade,
    private readonly countryFacade: CountryFacade
  ) {}
}
