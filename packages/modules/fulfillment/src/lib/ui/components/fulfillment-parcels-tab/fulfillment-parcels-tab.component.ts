import { Component, Input, OnChanges } from '@angular/core';

import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

import { Parcel } from '../../../models';

@Component({
  selector: 'app-fulfillment-parcels-tab',
  templateUrl: './fulfillment-parcels-tab.component.html',
  imports: [
    VCLSelectComponent,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
  ],
})
export class FulfillmentParcelsTabComponent implements OnChanges {
  @Input() parcels: Parcel[] = [];

  selectedParcelId?: string;
  selectedParcel?: Parcel;

  ngOnChanges(): void {
    if (this.parcels?.length) {
      this.selectParcel(this.parcels[0].id);
    }
  }

  selectParcel(parcelId: string) {
    this.selectedParcelId = parcelId;
    this.selectedParcel = this.parcels.find((p) => p.id === parcelId);
  }
}
