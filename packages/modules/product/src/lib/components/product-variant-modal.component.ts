import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { ComponentLayerRef, JssFormComponent } from '@vcl/ng-vcl';

import {
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

  schema = buildProductVariantSchema({});

  get title(): string {
    return this.layer.data.title;
  }

  get product(): IProduct {
    return this.layer.data.product;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }

  onSubmit() {
    const value = this.variantModalForm.form.value as IProductVariantFormValue;

    if (value.offerings === 'physical') {
      // REMOVE the field 'offerings'
      delete value.offerings;
      const product: IProduct = {
        ...this.product,
        product: {
          ...this.product.product,
          physical: {
            variants: [{ ...value }],
          },
        },
      };

      this.productFacade.update({
        items: [product],
        mode: ModeType.Update,
      });
    }

    this.close();
    // Massage the value to the parent product
  }

  onAction(_: string) {
    // TODO
  }
}
