import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  PriceGroupFacade,
  RouterFacade,
} from '@console-core/state';

@Component({
  selector: 'app-module-price-group-view',
  template: `
    @if (vm$ | async; as vm) {
    <div class="data-list m-0 p-0">
      <div class="my-2 rc-lv-l-heading">Price group details</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text"><b>Name:</b></div>
          <div class="flex text align-right rc-lv-label">
            {{ vm.priceGroup.name }}
          </div>
        </li>
        <li class="data-list-item justify-between">
          <div class="text"><b>Description:</b></div>
          <div class="text align-left rc-lv-label mt-1">
            {{ vm.priceGroup.description || '' }}
          </div>
        </li>
      </ul>
    </div>
    }
  `,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceGroupViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.priceGroupFacade.setSelectedId(id);
      })
    ),
    priceGroup: this.priceGroupFacade.selected$.pipe(
      tap((priceGroup) => {
        if (!priceGroup) {
          this.priceGroupFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.priceGroups.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly priceGroupFacade: PriceGroupFacade
  ) {}
}
