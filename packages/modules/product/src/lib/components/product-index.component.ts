import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ProductFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-product',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Products</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductIndexComponent {
  readonly vm$ = combineLatest({
    selectedProductId: this.productFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.products.children.view.getLink({ id })
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly productFacade: ProductFacade
  ) {}
}
