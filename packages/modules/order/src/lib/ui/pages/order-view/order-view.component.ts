import { DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RcResourceDetailComponent } from '@console/rc-ui';
import { of } from 'rxjs';

import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
  VCLBadgeComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

// import { OrderFacade } from '@console-core/state';

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
})
export class OrderViewComponent {
  // private readonly orderFacade = inject(OrderFacade);

  readonly selectedOrder$ = of(null);

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
