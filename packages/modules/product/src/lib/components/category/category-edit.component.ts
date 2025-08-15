import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ProductCategoryFacade,
  RouterFacade,
} from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildProductCategorySchema } from './jss-forms';

@Component({
  selector: 'app-module-category-edit',
  template: `
    @if (vm$ | async; as vm) {
    <div class="mt-2">
      <rc-crud-edit
        [id]="vm.id"
        [schema]="schema"
        [update]="update"
      />
    </div>
    }
  `,
  imports: [AsyncPipe, ModulesUiModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.ProductCategoryFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.ProductCategoryFacade.setSelectedId(id);
      })
    ),
    ProductCategory: this.ProductCategoryFacade.selected$.pipe(
      tap((ProductCategory) => {
        if (!ProductCategory) {
          this.ProductCategoryFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.categories.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((productCategory) => {
        this.schema = buildProductCategorySchema({ productCategory });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly ProductCategoryFacade: ProductCategoryFacade
  ) {}
}
