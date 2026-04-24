import { Component, Input, OnChanges } from '@angular/core';

import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListItemComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

import { FulfillmentParcelVM } from '../../../models';
import { FulfillmentStateBadgeComponent } from '../fulfillment-state-badge/fulfillment-state-badge.component';

@Component({
  selector: 'app-fulfillment-parcels-tab',
  templateUrl: './fulfillment-parcels-tab.component.html',
  imports: [
    VCLSelectComponent,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLSelectListComponent,
    VCLSelectListItemComponent,
    VCLButtonComponent,
    FulfillmentStateBadgeComponent,
  ],
})
export class FulfillmentParcelsTabComponent implements OnChanges {
  @Input() parcels: FulfillmentParcelVM[] = [];

  selectedParcelId?: string;
  selectedParcel?: FulfillmentParcelVM;

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
