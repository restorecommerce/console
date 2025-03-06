import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';

@Component({
  selector: 'app-module-fulfillment-label-modal',
  templateUrl: './fulfillment-label-modal.component.html',
  styles: [
    `
      .border-e8 {
        border: 1px solid #e8e8e8;
      }

      vcl-data-list-item {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfilmentLabelModalComponent {
  productRouter = ROUTER.pages.main.children.products.children;

  constructor(public layer: ComponentLayerRef) {}

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
