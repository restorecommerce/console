import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  CountryFacade,
  ManufacturerFacade,
  ProductCategoryFacade,
  ProductFacade,
  ProductPrototypeFacade,
  RouterFacade,
  TaxFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildProductSchema } from './jss-forms';

@Component({
  selector: 'app-module-product-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductEditComponent implements OnInit, OnDestroy {
  schema!: VCLFormFieldSchemaRoot;
  update = this.productFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.productFacade.setSelectedId(id);
      })
    ),
    manufacturers: this.manufacturerFacade.all$,
    countries: this.countriesFacade.all$,
    prototypes: this.prototypeFacade.all$,
    categories: this.categoryFacade.all$,
    taxes: this.taxFacade.all$,
    product: this.productFacade.selected$.pipe(
      tap((product) => {
        if (!product) {
          this.productFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.products.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
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

    this.subscriptions.add(
      this.vm$.subscribe((vm) => {
        this.schema = buildProductSchema({
          product: vm.product,
          manufacturers: vm.manufacturers,
          countries: vm.countries,
          prototypes: vm.prototypes,
          categories: vm.categories,
          taxes: vm.taxes,
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
