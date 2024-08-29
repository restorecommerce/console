import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { LayerRef, LayerService } from '@vcl/ng-vcl';

import { IoRestorecommerceOrderItem } from '@console-core/graphql';
import { IProduct } from '@console-core/types';

import { RcOrderItemFormComponent } from './order-item-form.component';

@Component({
  selector: 'rc-order-items',
  templateUrl: './order-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemsComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  items: IoRestorecommerceOrderItem[] = [];

  @Input({ required: true })
  products: IProduct[] = [];

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
          products: this.products,
        },
      })
      .subscribe((result) => {
        console.log('Result: ' + result?.value);
      });
  }
}
