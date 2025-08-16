import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ProductPrototypeFacade,
  RouterFacade,
} from '@console-core/state';

@Component({
  selector: 'app-module-product-prototype-view',
  template: `
    @if (vm$ | async; as vm) {
    <div class="data-list m-0 p-0">
      <div class="my-2 rc-lv-l-heading">Product Prototype Details</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text"><b>Name:</b></div>
          <div class="flex text align-right rc-lv-label">
            {{ vm.productPrototype.name }}
          </div>
        </li>
        <li class="data-list-item justify-between">
          <div class="text"><b>Description:</b></div>
          <div class="text align-left rc-lv-label mt-1">
            {{ vm.productPrototype.description || '' }}
          </div>
        </li>
      </ul>
    </div>
    }
  `,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.productPrototypeFacade.setSelectedId(id);
      })
    ),
    productPrototype: this.productPrototypeFacade.selected$.pipe(
      tap((productPrototype) => {
        if (!productPrototype) {
          this.productPrototypeFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.prototypes.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productPrototypeFacade: ProductPrototypeFacade
  ) {}
}
