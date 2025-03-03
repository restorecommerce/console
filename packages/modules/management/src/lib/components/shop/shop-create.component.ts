import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { combineLatest } from 'rxjs';

import { ShopFacade } from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-shop-create',
  template: `
    @if (vm$ | async; as vm) {
    <div class="mt-2">
      <rc-crud-create
        [schema]="vm.schema"
        [create]="create"
      />
    </div>
    }
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ShopCreateComponent implements OnDestroy {
  create = this.shopFacade.create;

  readonly vm$ = combineLatest({
    shop: this.shopFacade.selected$,
    schema: this.jssFormService.shopSchema$,
  });

  constructor(
    private readonly shopFacade: ShopFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
