import { Pipe, PipeTransform } from '@angular/core';

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

    return firstImageInVariant
      ? firstImageInVariant.url || ''
      : ('https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' as string);
  }
}
