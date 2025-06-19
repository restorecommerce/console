import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import {
  IoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import { ProductFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

import { ProductVariantService } from '../../services/product-variant-upsert.service';

@Component({
  selector: 'app-module-product-variant-modal',
  templateUrl: './product-variant-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductVariantEditComponent {
  productVariantForm!: FormGroup;

  constructor(
    public layer: ComponentLayerRef,
    private readonly productFacade: ProductFacade,
    private readonly productVariantService: ProductVariantService
  ) {}

  close(value?: string) {
    this.layer.close({
      value,
    });
  }

  onSubmit(value: IoRestorecommerceProductPhysicalVariant) {
    const product = this.productVariantService.prepareProduct(
      value,
      this.layer.data.product as IProduct,
      'variant'
    );

    this.productFacade.update({ items: [product], mode: ModeType.Update });

    this.close();
  }

  onAction(_: string) {
    this.close();
  }
}
