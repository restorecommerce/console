import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ManufacturerFacade,
  RouterFacade,
} from '@console-core/state';

@Component({
  selector: 'app-module-manufacturer-view',
  template: `
    @if (vm$ | async; as vm) {
    <div class="data-list m-0 p-0">
      <div class="my-2 rc-lv-l-heading">Product Details</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text"><b>Name:</b></div>
          <div class="flex text align-right rc-lv-label">
            {{ vm.manufacturer.name }}
          </div>
        </li>
        <li class="data-list-item justify-between">
          <div class="text"><b>Description:</b></div>
          <div class="text align-left rc-lv-label mt-1">
            {{ vm.manufacturer.description || '' }}
          </div>
        </li>
      </ul>
    </div>
    }
  `,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManufacturerViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.manufacturerFacade.setSelectedId(id);
      })
    ),
    manufacturer: this.manufacturerFacade.selected$.pipe(
      tap((manufacturer) => {
        if (!manufacturer) {
          this.manufacturerFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.manufacturers.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly manufacturerFacade: ManufacturerFacade
  ) {}
}
