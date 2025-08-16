import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ProductPrototypeFacade,
  RouterFacade,
} from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildProductPrototypeSchema } from './jss-forms';

@Component({
  selector: 'app-module-product-prototype-edit',
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
export class PrototypeEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.ProductPrototypeFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.ProductPrototypeFacade.setSelectedId(id);
      })
    ),
    ProductPrototype: this.ProductPrototypeFacade.selected$.pipe(
      tap((prototype) => {
        if (!prototype) {
          this.ProductPrototypeFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.prototypes.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((prototype) => {
        this.schema = buildProductPrototypeSchema({ prototype });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly ProductPrototypeFacade: ProductPrototypeFacade
  ) {}
}
