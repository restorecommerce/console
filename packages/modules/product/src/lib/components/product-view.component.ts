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

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { IIoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';
import {
  ProductFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IProduct } from '@console-core/types';

import { ProductVariantEditComponent } from './product-variant-modal.component';

@Component({
  selector: 'app-module-product-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-product-view
        (addVariant)="onAddVariant(vm.product)"
        (editVariant)="onEditVariant($event)"
        [product]="vm.product"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent implements OnInit, OnDestroy {
  addVariantLayer!: LayerRef;
  private readonly subscriptions = new SubSink();

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.productFacade.setSelectedId(id);
        this.productFacade.readOneById({ id });
      })
    ),
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

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly productFacade: ProductFacade,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {
    this.addVariantLayer = this.layerService.create(
      ProductVariantEditComponent,
      {
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onAddVariant(product: IProduct) {
    this.subscriptions.sink = this.addVariantLayer
      .open({
        data: {
          title: `Add product variant`,
          product,
        },
      })
      .subscribe();
  }

  onEditVariant(variant: IIoRestorecommerceProductPhysicalVariant) {
    console.log('variant:', variant);
    this.subscriptions.sink = this.addVariantLayer
      .open({
        data: {
          title: `Edit product variant`,
          variant,
        },
      })
      .subscribe();
  }
}
