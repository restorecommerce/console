import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceFulfillmentFulfillmentState,
  IoRestorecommerceFulfillmentParcel,
  Maybe,
} from '@console-core/graphql';
import { IFulfillment } from '@console-core/types';

import { FulfilmentLabelModalComponent } from './view/fulfillment-label-modal.component';

@Component({
  selector: 'app-module-fulfillment-view-details',
  templateUrl: './fulfillment-view-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .clickable-label {
        color: #ffae44;
        cursor: pointer;
      }
    `,
  ],
  standalone: false,
})
export class FulfillmentViewDetailsComponent implements OnInit {
  @Input({ required: true }) fulfillment!: IFulfillment;

  labelModalLayer!: LayerRef;

  FulfillmentFulfillmentState = IoRestorecommerceFulfillmentFulfillmentState;

  orderRouter = ROUTER.pages.main.children.orders.children;
  productRouter = ROUTER.pages.main.children.products.children;

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {
    this.labelModalLayer = this.layerService.create(
      FulfilmentLabelModalComponent,
      {
        panelClass: ['h-90p', 'py-2'],
        closeOnBackdropClick: false,
        closeOnEscape: false,
      }
    );
  }

  onClickLabel(parcelId: Maybe<string> | undefined) {
    const parcels = (this.fulfillment.packaging?.parcels ||
      []) as IoRestorecommerceFulfillmentParcel[];

    const parcel = parcels.find((parcel) => parcel.id === parcelId);

    this.labelModalLayer
      .open({
        data: {
          title: '',
          parcel,
        },
      })
      .subscribe((result) => {
        console.log(result?.value);
      });
  }
}
