import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductPhysicalVariant,
} from '@console-core/graphql';
import { IProduct } from '@console-core/types';

@Injectable({
  providedIn: 'root',
})
export class ProductVariantService {
  prepareProduct(
    formValue: Partial<IoRestorecommerceProductPhysicalVariant>,
    product: IProduct,
    mode: 'variant' | 'template'
  ) {
    const value = { ...formValue };

    const regularPrice = +(value.price?.regularPrice || 0);
    const salePrice = +(value.price?.salePrice || 0);
    value.stockLevel = +(value.stockLevel || 0);
    value.price = { ...value.price, regularPrice, salePrice };

    if (mode === 'variant') {
      const preparedVariant = this.prepareVariant(value, product);
      return preparedVariant;
    } else {
      return this.prepareTemplate(value, product);
    }
  }

  private prepareVariant(
    value: Partial<IoRestorecommerceProductPhysicalVariant>,
    product: IProduct
  ): IProduct {
    if (value.id) {
      const updatedVariants = product.product.physical?.variants?.map((v) =>
        v.id === value.id ? Object.assign({}, v, value) : v
      );

      const productWithUpdatedVariant = {
        ...product,
        product: {
          ...product.product,
          physical: {
            templates: product.product.physical?.templates || [],
            variants: updatedVariants,
          },
        },
      };

      return productWithUpdatedVariant;
    } else {
      value.id = uuidv4();
      return this.addNewVariant(value, product);
    }
  }

  private prepareTemplate(
    value: Partial<IoRestorecommerceProductPhysicalVariant>,
    product: IProduct
  ) {
    if (value.id) {
      const updatedTemplate = {
        ...value,
      } as IIoRestorecommerceProductPhysicalVariant;
      const productWithUpdatedTemplate =
        product.product.physical?.templates?.map((t) =>
          t.id === updatedTemplate.id ? updatedTemplate : t
        );

      return {
        ...product,
        product: {
          ...product.product,
          physical: { templates: productWithUpdatedTemplate },
        },
      };
    } else {
      value.id = uuidv4();
      return this.addNewTemplate(value, product);
    }
  }

  private addNewVariant(
    value: Partial<IoRestorecommerceProductPhysicalVariant>,
    product: IProduct
  ) {
    return {
      ...product,
      product: {
        ...product.product,
        physical: {
          variants: [...(product.product.physical?.variants || []), value],
        },
      },
    };
  }

  private addNewTemplate(
    value: Partial<IoRestorecommerceProductPhysicalVariant>,
    product: IProduct
  ) {
    return {
      ...product,
      product: {
        ...product.product,
        physical: {
          templates: [...(product.product.physical?.templates || []), value],
        },
      },
    };
  }
}
