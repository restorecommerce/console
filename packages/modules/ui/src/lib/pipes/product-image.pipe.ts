import { Pipe, PipeTransform } from '@angular/core';

import { API } from '@console-core/config';
import {
  IoRestorecommerceImageImage,
  IoRestorecommerceProductPhysicalVariant,
} from '@console-core/graphql';
import { IProduct } from '@console-core/types';

@Pipe({
  name: 'productImage',
  standalone: false,
})
export class ProductImagePipe implements PipeTransform {
  transform(product: IProduct): string {
    const firstVariat = product.product.physical?.variants?.[0];

    if (firstVariat?.images && firstVariat.images.length > 0) {
      return `${API.domains.bucketDomain}${firstVariat.images[0].url}`;
    } else {
      const firstVariantTemplate = product.product?.physical?.templates?.find(
        (templ) => templ.id === firstVariat?.parentVariantId
      ) as IoRestorecommerceProductPhysicalVariant;

      const firstImageInTemplate = firstVariantTemplate
        ?.images?.[0] as IoRestorecommerceImageImage;

      return `${API.domains.bucketDomain}${firstImageInTemplate?.url || ''}`;
    }
  }
}
