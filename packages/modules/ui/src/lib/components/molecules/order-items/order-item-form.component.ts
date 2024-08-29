import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import { IoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';
import { IProduct } from '@console-core/types';

@Component({
  selector: 'rc-order-item-form',
  templateUrl: './order-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemFormComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new SubSink();
  variants: IoRestorecommerceProductPhysicalVariant[] = [];

  formGroup = new FormGroup({
    productId: new FormControl(''),
    variantId: new FormControl(''),
    quantity: new FormControl(0),
    unitPrice: new FormGroup({
      sale: new FormControl(true),
      currencyId: new FormControl(''),
      salePrice: new FormControl(0),
      regularPrice: new FormControl(0),
    }),
  });

  constructor(private layer: ComponentLayerRef) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.formGroup
        .get('productId')
        ?.valueChanges.subscribe((selectedProductId) => {
          this.variants =
            this.products.find((p) => p.id === selectedProductId)?.product
              .physical?.variants || [];

          this.formGroup.get('variantId')?.reset();
        })
    );

    this.subscriptions.add(
      this.formGroup
        .get('variantId')
        ?.valueChanges.subscribe((selectedVariantId) => {
          const selectedVariant = this.variants.find(
            (item) => item.id === selectedVariantId
          );
          if (selectedVariant) {
            this.formGroup.get('unitPrice')?.patchValue({
              regularPrice: selectedVariant.price?.regularPrice || 0,
              salePrice: selectedVariant.price?.salePrice || 0,
              sale: selectedVariant.price?.sale || false,
              currencyId: selectedVariant.price?.currencyId || '',
            });
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get products(): IProduct[] {
    return this.layer.data.products;
  }

  onAction(_: string): void {
    // TODO
  }

  onSubmit(): void {
    // TODO
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
