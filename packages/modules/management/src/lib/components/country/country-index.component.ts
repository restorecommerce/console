import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  CountryFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-country-index',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Countries</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CountryIndexComponent {
  readonly vm$ = combineLatest({
    selectedCountryId: this.countryFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.management.children.countries.children.view.getLink(
            { id }
          )
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly countryFacade: CountryFacade
  ) {}
}
