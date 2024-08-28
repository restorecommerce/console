import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';

import { RcOrderItemFormComponent } from './order-item-form.component';
import { buildOrderItemSchema } from './order-item.schema';

@Component({
  selector: 'rc-order-items',
  templateUrl: './order-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemsComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  items: IoRestorecommerceOrderItem[] = [];

  addItemLayer!: LayerRef;

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {
    this.addItemLayer = this.layerService.create(RcOrderItemFormComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  ngOnDestroy() {
    this.addItemLayer?.destroy();
  }

  openAddOrderItemComponent() {
    this.addItemLayer
      .open({
        data: {
          schema: buildOrderItemSchema({}),
        },
      })
      .subscribe((result) => {
        console.log('Result: ' + result?.value);
      });
  }
}
