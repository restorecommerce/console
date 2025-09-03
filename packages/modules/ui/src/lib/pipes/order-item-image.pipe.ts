import { Pipe, PipeTransform } from '@angular/core';

import { IoRestorecommerceImageImage } from '@console-core/graphql';
import { IOrder } from '@console-core/types';

@Pipe({
  name: 'orderItemImageThumb',
  pure: true,
  standalone: false,
})
export class OrderItemImageThumbPipe implements PipeTransform {
  transform(order: IOrder): string {
    const firstItem = order.items?.[0];

    if (firstItem) {
      const templateImages =
        firstItem.product?.product?.physical?.templates?.reduce(
          (images, template) => {
            return [...images, ...(template.images || [])];
          },
          [] as IoRestorecommerceImageImage[]
        );

      if (templateImages?.length === 0) {
        const variantImages =
          firstItem.product?.product?.physical?.variants?.reduce(
            (images, variant) => {
              return [...images, ...(variant.images || [])];
            },
            [] as IoRestorecommerceImageImage[]
          );

        return variantImages?.[0].url || 'default image';
      }

      return templateImages?.[0].url || 'default image';
    } else {
      return 'default image';
    }
  }
}
