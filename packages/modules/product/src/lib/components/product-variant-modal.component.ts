import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { ComponentLayerRef, JssFormComponent } from '@vcl/ng-vcl';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import { ProductFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

import { buildProductVariantSchema } from '../jss-forms';

interface IProductVariantFormValue
  extends IoRestorecommerceProductPhysicalVariant {
  offerings?: 'physical' | 'virtual' | 'service';
}

@Component({
  selector: 'app-module-product-variant-modal',
  template: ` <vcl-panel-dialog
    [showCloseButton]="true"
    (close)="close()"
  >
    <vcl-panel-title>{{ title }}</vcl-panel-title>

    <vcl-jss-form
      autocomplete="off"
      #variantModalForm="vclJssForm"
      [schema]="schema"
      (formSubmit)="onSubmit()"
      (formAction)="onAction($event)"
    >
    </vcl-jss-form>
  </vcl-panel-dialog>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVariantEditComponent {
  constructor(
    private layer: ComponentLayerRef,
    private readonly productFacade: ProductFacade
  ) {}

  @ViewChild('variantModalForm')
  variantModalForm!: JssFormComponent;

  schema = buildProductVariantSchema({
    product: this.variant,
  });

  get title(): string {
    return this.layer.data.title;
  }

  get product(): IProduct {
    return this.layer.data.product;
  }

  get variant(): IIoRestorecommerceProductPhysicalVariant {
    return this.layer.data.variant;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }

  onSubmit() {
    // ASSUME A PRODUCT IS PHYSICAL!
    const value = this.variantModalForm.form.value as IProductVariantFormValue;

    // Fix the backend price issues!
    const regularPrice = +(value.price?.regularPrice || 0);
    const salePrice = +(value.price?.salePrice || 0);

    // TODO Convert price!
    value.stockLevel = +(value.stockLevel || 0);
    value.price = {
      ...value.price,
      regularPrice,
      salePrice,
    };

    // REMOVE the field 'offerings'
    delete value.offerings;

    if (this.variant.id) {
      // EDIT MODE
      const updatedVariant: IIoRestorecommerceProductPhysicalVariant = {
        ...this.variant,
        ...value,
      };

      const productWithUpdatedVariant =
        this.product.product.physical?.variants?.map((variant) => {
          if (variant.id === updatedVariant.id) {
            return updatedVariant;
          } else {
            return variant;
          }
        });

      const product: IProduct = {
        ...this.product,
        product: {
          ...this.product.product,
          physical: {
            variants: productWithUpdatedVariant,
          },
        },
      };

      this.productFacade.update({
        items: [product],
        mode: ModeType.Update,
      });
    } else {
      // CREATE MODE
      value.id = uuidv4();
      let product: IProduct;

      if (this.product.product.physical?.variants) {
        product = {
          ...this.product,
          product: {
            ...this.product.product,
            taxIds: this.product.product.taxIds ?? [],
            physical: {
              variants: [
                ...this.product.product.physical.variants,
                {
                  ...value,
                },
              ],
            },
          },
        };
      } else {
        product = {
          ...this.product,
          product: {
            ...this.product.product,
            physical: {
              variants: [{ ...value }],
            },
          },
        };
      }

      !this.product.tags && delete product.tags;
      !this.product.product.taxIds && delete product.product.taxIds;

      this.productFacade.update({
        items: [product],
        mode: ModeType.Update,
      });
    }

    this.close();
  }

  onAction(_: string) {
    this.close();
  }
}
