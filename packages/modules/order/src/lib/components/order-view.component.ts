import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RcResourceDetailComponent } from '@console/rc-ui';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
  VCLBadgeComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

import { OrderFacade } from '@console-core/state';

@Component({
  selector: 'app-module-order-view',
  templateUrl: './order-view.component.html',
  imports: [
    AsyncPipe,
    DatePipe,
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    RcResourceDetailComponent,
    VCLBadgeComponent,
    VCLButtonComponent,
  ],
  styles: [
    `
      :host {
        background-color: #fff;
        display: block;
        height: 100%;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 0.75rem 1rem;

        > div {
          min-width: 0;
        }
      }

      hr {
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        margin: 0.25rem 0;
      }

      .muted {
        color: rgba(0, 0, 0, 0.6);
      }

      .small {
        font-size: 0.75rem; /* 12px */
        line-height: 1.25;
      }

      .pre {
        margin: 0.4rem 0 0;
        padding: 0.75rem;
        overflow: auto;
        border-radius: 0.75rem;
        border: 1px solid rgba(0, 0, 0, 0.06);
        background: rgba(0, 0, 0, 0.02);
        max-height: 360px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderViewComponent {
  private readonly orderFacade = inject(OrderFacade);

  readonly selectedOrder$ = this.orderFacade.selected$;

  goBack() {
    // TODO
  }

  editOrder() {
    // TODO
  }

  deleteOrder() {
    // TODO
  }
}
