import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import {
  IoRestorecommerceProductPhysicalVariant,
  ModeType,
} from '@console-core/graphql';
import { ProductFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

import { ProductVariantService } from '../../services/product-variant-upsert.service';

@Component({
  selector: 'app-module-product-template-modal',
  templateUrl: './product-template-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductTemplateEditComponent {
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
      'template'
    );

    this.productFacade.update({ items: [product], mode: ModeType.Update });

    this.close();
  }

  onAction(_: string) {
    this.close();
  }
}
