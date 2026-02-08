import { CurrencyPipe } from '@angular/common';
import { Component, computed, Input } from '@angular/core';

import { Fulfillment } from '../../../models';

@Component({
  selector: 'app-fulfillment-overview-tab',
  templateUrl: './fulfillment-overview-tab.component.html',
  imports: [CurrencyPipe],
})
export class FulfillmentOverviewTab {
  @Input({ required: true }) vm!: Fulfillment;

  itemCount = computed(() => {
    return this.vm.parcels.reduce(
      (total, parcel) => parcel.items.length + total,
      0
    );
  });

  totalWeight = computed(() => {
    return this.vm.parcels.reduce(
      (total, parcel) => parcel.weightKg + total,
      0
    );
  });
}
