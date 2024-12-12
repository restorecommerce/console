import { Pipe, PipeTransform } from '@angular/core';

import { IoRestorecommerceFulfillmentItem } from '@console-core/graphql';

@Pipe({
  name: 'parcelTotalSize',
  pure: true,
  standalone: false,
})
export class ParcelsTotalSizePipe implements PipeTransform {
  transform(
    parcels: IoRestorecommerceFulfillmentItem[],
    property: 'length' | 'width' | 'height'
  ): number {
    return parcels.reduce((total, parcel) => {
      const propValue = parcel.package?.sizeInCm?.[property] || 0;
      return propValue + total;
    }, 0);
  }
}
