import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildProductSchema } from '../jss-forms';

@Component({
  selector: 'app-module-product-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.productFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.productFacade.setSelectedId(id);
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
      filterEmptyAndNullishAndUndefined(),
      tap((product) => {
        this.schema = buildProductSchema({ product });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade
  ) {}
}
