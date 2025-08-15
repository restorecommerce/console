import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  PriceGroupFacade,
  RouterFacade,
} from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildPriceGroupSchema } from './jss-forms';

@Component({
  selector: 'app-module-price-group-edit',
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
export class PriceGroupEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.priceGroupFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
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
      filterEmptyAndNullishAndUndefined(),
      tap((priceGroup) => {
        this.schema = buildPriceGroupSchema({ priceGroup });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly priceGroupFacade: PriceGroupFacade
  ) {}
}
