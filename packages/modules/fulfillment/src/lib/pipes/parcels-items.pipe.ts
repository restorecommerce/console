import { Pipe, PipeTransform } from '@angular/core';

import { IFulfilmentItem, IFulfilmentParcel } from '@console-core/types';

@Pipe({
  name: 'parcelsItems',
  pure: true,
  standalone: false,
})
export class FulfilmentParcelsItemsPipe implements PipeTransform {
  transform(parcels: IFulfilmentParcel[]): IFulfilmentItem[] {
    return parcels.reduce((allParcelItems, parcel) => {
      return [...allParcelItems, ...parcel.items];
    }, [] as IFulfilmentItem[]);
  }
}
