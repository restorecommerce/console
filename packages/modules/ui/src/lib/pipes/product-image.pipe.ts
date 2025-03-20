import { Pipe, PipeTransform } from '@angular/core';

import { API } from '@console-core/config';
import {
  IoRestorecommerceImageImage,
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductProduct,
} from '@console-core/graphql';

@Pipe({
  name: 'productImage',
  standalone: false,
})
export class ProductImagePipe implements PipeTransform {
  transform(product: IoRestorecommerceProductProduct): string {
    const firstTemplate = product.product?.physical
      ?.templates?.[0] as IoRestorecommerceProductPhysicalVariant;

    const firstImageInTemplate = firstTemplate
      ?.images?.[0] as IoRestorecommerceImageImage;

    return `${API.domains.bucketDomain}${firstImageInTemplate?.url || ''}`;
  }
}
