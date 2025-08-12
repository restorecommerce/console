import { AsyncPipe, JsonPipe } from '@angular/common';
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
  selector: 'app-module-product-view',
  template: `
    @if (vm$ | async; as vm) {
    {{ vm.manufacturer | json }}
    }
  `,
  imports: [JsonPipe, AsyncPipe],
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
