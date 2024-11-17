import { Pipe, PipeTransform } from '@angular/core';

import { IoRestorecommerceFulfillmentItem } from '@console-core/graphql';

@Pipe({
  name: 'parcelTotalWeight',
  pure: true,
})
export class ParcelsTotalWeightPipe implements PipeTransform {
  transform(parcels: IoRestorecommerceFulfillmentItem[]): number {
    return parcels.reduce((total, parcel) => {
      const propValue = parcel.package?.weightInKg || 0;
      return propValue + total;
    }, 0);
  }
}
