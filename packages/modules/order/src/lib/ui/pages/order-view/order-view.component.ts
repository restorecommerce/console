import { DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RcResourceDetailComponent } from '@console/rc-ui';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
  VCLBadgeComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

import { OrderViewFacade } from '../../../store';

@Component({
  selector: 'app-module-order-view',
  templateUrl: './order-view.component.html',
  imports: [
    DatePipe,
    JsonPipe,
    VCLTabNavComponent,
    VCLTabComponent,
    VCLLabelDirective,
    RcResourceDetailComponent,
    VCLBadgeComponent,
    VCLButtonComponent,
  ],
  styleUrl: './order-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderViewFacade],
})
export class OrderViewComponent {
  private readonly orderFacade = inject(OrderViewFacade);

  readonly order = this.orderFacade.order;

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
