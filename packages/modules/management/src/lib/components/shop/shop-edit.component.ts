import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  RouterFacade,
  ShopFacade,
} from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-shop-edit',
  template: `
    @if (vm$ | async; as vm) {
    <div class="mt-2">
      <rc-crud-edit
        [id]="vm.id"
        [schema]="vm.schema"
        [update]="update"
      />
    </div>
    }
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopEditComponent implements OnDestroy {
  update = this.shopFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.shopFacade.setSelectedId(id);
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
    schema: this.jssFormService.shopSchema$,
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly shopFacade: ShopFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
