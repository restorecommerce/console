import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  filterEmptyAndNullishAndUndefined,
  ManufacturerFacade,
  RouterFacade,
} from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildManufacturerSchema } from './jss-forms';

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
  update = this.manufacturerFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
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
      filterEmptyAndNullishAndUndefined(),
      tap((manufacturer) => {
        this.schema = buildManufacturerSchema({ manufacturer });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly manufacturerFacade: ManufacturerFacade
  ) {}
}
