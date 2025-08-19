import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import {
  CountryFacade,
  ManufacturerFacade,
  ProductFacade,
} from '@console-core/state';

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
    countries: this.countriesFacade.all$,
  });

  constructor(
    private readonly productFacade: ProductFacade,
    private manufacturerFacade: ManufacturerFacade,
    private countriesFacade: CountryFacade
  ) {}

  ngOnInit(): void {
    // TODO Make sure to load this through a resolver.
    this.countriesFacade.read({});

    this.vm$.subscribe((vm) => {
      this.schema = buildProductSchema({
        manufacturers: vm.manufacturers,
        countries: vm.countries,
      });
    });
  }
}
