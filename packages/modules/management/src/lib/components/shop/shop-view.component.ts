import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  RouterFacade,
  ShopFacade,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-shop-view',
  template: `
    <h3>Shop view</h3>
    <ng-container *ngIf="vm$ | async as vm">
      <!-- <app-module-management-shop-details [vm]="vm" /> -->
      {{ vm.shop | json }}
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.shopFacade.setSelectedId(id);
        this.shopFacade.readOneById({ id });
      })
    ),
    shop: this.shopFacade.selected$.pipe(
      tap((shop) => {
        if (!shop) {
          this.shopFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.shops.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly shopFacade: ShopFacade
  ) {}
}
