import { Pipe, PipeTransform } from '@angular/core';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceImageImage,
} from '@console-core/graphql';

const BASE_IMAGE_URL = 'http://localhost:5000/storage/public/';
@Pipe({
  name: 'productVariantImage',
  standalone: false,
})
export class ProductVariantImagePipe implements PipeTransform {
  transform(productVariant: IIoRestorecommerceProductPhysicalVariant): string {
    const firstImageInVariant = productVariant
      ?.images?.[0] as IoRestorecommerceImageImage;

    console.log('images', firstImageInVariant);

    return firstImageInVariant
      ? `${BASE_IMAGE_URL}${firstImageInVariant.url}` || ''
      : ('https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' as string);
  }
}
