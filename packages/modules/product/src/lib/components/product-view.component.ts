import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-product-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-product-view [product]="vm.product" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.productFacade.setSelectedId(id);
        this.productFacade.readOneById({ id });
      })
    ),
    product: this.productFacade.selected$.pipe(
      tap((product) => {
        if (!product) {
          this.productFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade
  ) {}
}
