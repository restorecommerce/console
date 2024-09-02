import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith } from 'rxjs';
import { SubSink } from 'subsink';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import {
  IIoRestorecommerceOrderItem,
  IIoRestorecommerceOrderOrder,
  IoRestorecommerceOrderItem,
  IoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import { OrderFacade } from '@console-core/state';
import { IOrder, IProduct } from '@console-core/types';

import { transformOrderToInput } from '../../utils';

@Component({
  selector: 'app-order-item-form',
  templateUrl: './order-item-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemFormComponent implements OnInit, OnDestroy {
  private readonly subscriptions = new SubSink();
  variants: IoRestorecommerceProductPhysicalVariant[] = [];

  formGroup = new FormGroup({
    productId: new FormControl(this.orderItem?.productId || ''),
    variantId: new FormControl(this.orderItem?.variantId || ''),
    quantity: new FormControl(this.orderItem?.quantity || 0),
    unitPrice: new FormGroup({
      sale: new FormControl(this.orderItem?.unitPrice?.sale || false),
      currencyId: new FormControl(this.orderItem?.unitPrice?.currencyId || ''),
      salePrice: new FormControl(this.orderItem?.unitPrice?.salePrice || 0),
      regularPrice: new FormControl(
        this.orderItem?.unitPrice?.regularPrice || 0
      ),
    }),
  });

  constructor(
    private layer: ComponentLayerRef,
    private readonly orderFacade: OrderFacade
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.formGroup
        .get('productId')
        ?.valueChanges.pipe(startWith(this.orderItem?.productId))
        .subscribe((selectedProductId) => {
          this.variants =
            this.products.find((p) => p.id === selectedProductId)?.product
              .physical?.variants || [];

          //  Always reset for a form that's on create mode.
          if (!this.orderItem) {
            this.formGroup.get('variantId')?.reset();
          }
        })
    );

    this.subscriptions.add(
      this.formGroup
        .get('variantId')
        ?.valueChanges.pipe(startWith(this.orderItem?.variantId))
        .subscribe((selectedVariantId) => {
          if (!this.orderItem) {
            // Prepopulation for creation!
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
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get title(): string {
    return this.layer.data.title;
  }

  get order(): IOrder {
    return this.layer.data.order;
  }

  get products(): IProduct[] {
    return this.layer.data.products;
  }

  get orderItem(): IoRestorecommerceOrderItem | undefined {
    return this.layer.data.orderItem;
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const currentOrderInput = transformOrderToInput(this.order);

      if (this.orderItem) {
        // Edit mode for an order!
        const currentOrderItem = currentOrderInput.items?.find(
          (item) =>
            item.productId === this.orderItem?.productId &&
            item.variantId === this.orderItem?.variantId
        );

        if (currentOrderItem) {
          const updatedOrderItem: IIoRestorecommerceOrderItem = {
            ...currentOrderItem,
            quantity: +(this.formGroup.value.quantity || 0),
            unitPrice: {
              sale: Boolean(this.formGroup.value.unitPrice?.sale),
              salePrice: +(this.formGroup.value.unitPrice?.salePrice || 0),
              regularPrice: +(
                this.formGroup.value.unitPrice?.regularPrice || 0
              ),
            },
          };

          const updatedOrderItems = currentOrderInput.items?.map((item) => {
            if (
              item.productId === this.orderItem?.productId &&
              item.variantId === this.orderItem?.variantId
            ) {
              return updatedOrderItem;
            }

            return item;
          });

          const updatedOrderInput: IIoRestorecommerceOrderOrder = {
            ...currentOrderInput,
            items: updatedOrderItems,
          };

          this.orderFacade.update({
            items: [updatedOrderInput],
            mode: ModeType.Update,
          });
        }
      } else {
        const updatedOrderInput: IIoRestorecommerceOrderOrder = {
          ...currentOrderInput,
          items: [
            ...(currentOrderInput.items || []),
            {
              ...this.formGroup.value,
              quantity: +(this.formGroup.value.quantity || 0),
              unitPrice: {
                sale: Boolean(this.formGroup.value.unitPrice?.sale),
                salePrice: +(this.formGroup.value.unitPrice?.salePrice || 0),
                regularPrice: +(
                  this.formGroup.value.unitPrice?.regularPrice || 0
                ),
              },
            },
          ],
        };

        this.orderFacade.update({
          items: [updatedOrderInput],
          mode: ModeType.Update,
        });
      }
    }
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
