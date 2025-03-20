import { Pipe, PipeTransform } from '@angular/core';

import { API } from '@console-core/config';
import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceImageImage,
} from '@console-core/graphql';

@Pipe({
  name: 'productVariantImage',
  standalone: false,
})
export class ProductVariantImagePipe implements PipeTransform {
  transform(productVariant: IIoRestorecommerceProductPhysicalVariant): string {
    const firstImageInVariant = productVariant
      ?.images?.[0] as IoRestorecommerceImageImage;

    return `${API.domains.bucketDomain}${firstImageInVariant?.url || ''}`;
  }
}
