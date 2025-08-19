import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { ManufacturerFacade, ProductFacade } from '@console-core/state';

import { buildProductSchema } from './jss-forms';

@Component({
  selector: 'app-module-product-create',
  template: `
    <div class="mt-2">
      <rc-crud-create
        [schema]="schema"
        [create]="create"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductCreateComponent implements OnInit {
  schema = buildProductSchema({});
  create = this.productFacade.create;

  readonly vm$ = combineLatest({
    product: this.productFacade.selected$,
    manufacturers: this.manufacturerFacade.all$,
  });

  constructor(
    private readonly productFacade: ProductFacade,
    private manufacturerFacade: ManufacturerFacade
  ) {}

  ngOnInit(): void {
    this.vm$.subscribe((vm) => {
      this.schema = buildProductSchema({
        manufacturers: vm.manufacturers,
      });
    });
  }
}
