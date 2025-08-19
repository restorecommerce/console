import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import {
  CountryFacade,
  ManufacturerFacade,
  ProductCategoryFacade,
  ProductFacade,
  ProductPrototypeFacade,
  TaxFacade,
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
    manufacturers: this.manufacturerFacade.all$,
    countries: this.countriesFacade.all$,
    prototypes: this.prototypeFacade.all$,
    categories: this.categoryFacade.all$,
    taxes: this.taxFacade.all$,
  });

  constructor(
    private readonly countriesFacade: CountryFacade,
    private readonly categoryFacade: ProductCategoryFacade,
    private readonly productFacade: ProductFacade,
    private readonly prototypeFacade: ProductPrototypeFacade,
    private readonly manufacturerFacade: ManufacturerFacade,
    private readonly taxFacade: TaxFacade
  ) {}

  ngOnInit(): void {
    // TODO Make sure to load this through a resolver.
    this.categoryFacade.read({});
    this.countriesFacade.read({});
    this.prototypeFacade.read({});
    this.manufacturerFacade.read({});
    this.taxFacade.read({});

    this.vm$.subscribe((vm) => {
      this.schema = buildProductSchema({
        manufacturers: vm.manufacturers,
        countries: vm.countries,
        prototypes: vm.prototypes,
        categories: vm.categories,
        taxes: vm.taxes,
      });
    });
  }
}
