import { Pipe, PipeTransform } from '@angular/core';

import {
  IoRestorecommerceImageImage,
  IoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductProduct,
} from '@console-core/graphql';

const BASE_IMAGE_URL = 'http://localhost:5000/storage/public/';
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

    return firstImageInTemplate
      ? `${BASE_IMAGE_URL}${firstImageInTemplate.url}` || ''
      : ('https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg' as string);
  }
}
