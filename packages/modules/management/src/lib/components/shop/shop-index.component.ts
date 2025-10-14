import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ShopFacade,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-shop-index',
  template: `
    @if(vm$ | async; as vm) {
    <h3>Shops</h3>
    }
  `,
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopIndexComponent {
  readonly vm$ = combineLatest({
    selectedOrganizationId: this.shopFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.management.children.shops.children.view.getLink(
            { id }
          )
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly shopFacade: ShopFacade
  ) {}
}
