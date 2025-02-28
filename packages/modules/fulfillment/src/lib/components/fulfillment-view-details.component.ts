import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { ComponentLayerRef, LayerRef, LayerService } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { IFulfillment } from '@console-core/types';

@Component({
  selector: 'app-module-fulfillment-view-details',
  templateUrl: './fulfillment-view-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentViewDetailsComponent implements OnInit {
  @Input({ required: true }) fulfillment!: IFulfillment;

  labelModalLayer!: LayerRef;

  orderRouter = ROUTER.pages.main.children.orders.children;
  productRouter = ROUTER.pages.main.children.products.children;

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {
    this.labelModalLayer = this.layerService.create(LabelModalComponent, {
      closeOnBackdropClick: false,
      closeOnEscape: false,
    });
  }

  onClickLabel() {
    this.labelModalLayer
      .open({
        data: {
          title: '',
        },
      })
      .subscribe((result) => {
        console.log(result?.value);
      });
  }
}

@Component({
  selector: 'app-module-fulfillment-label-modal',
  template: `
    <vcl-panel-dialog
      [showCloseButton]="true"
      (close)="close()"
    >
      <vcl-panel-title>Label</vcl-panel-title>
      <vcl-data-list
        mode="none"
        [noBorder]="true"
      >
        <!-- <vcl-data-list-header>
          <h2>Kittens</h2>
        </vcl-data-list-header> -->
        <vcl-data-list-item>
          <ng-container *ngTemplateOutlet="labelPropTemplate"></ng-container>
        </vcl-data-list-item>
      </vcl-data-list>
    </vcl-panel-dialog>

    <ng-template #labelPropTemplate>
      <div class="flex row justify-content-between align-items-center">
        <span>Quantity</span>
        <span>4</span>
      </div>
    </ng-template>
  `,
  styles: [
    `
      vcl-data-list-item {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LabelModalComponent {
  constructor(private layer: ComponentLayerRef) {}

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
