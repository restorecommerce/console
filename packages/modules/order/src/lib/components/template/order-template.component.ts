import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RcResourcePageLayoutComponent } from '@console/rc-ui';
import { combineLatest } from 'rxjs';

import { OrderFacade, RouterFacade } from '@console-core/state';

@Component({
  selector: 'app-module-order-template',
  templateUrl: './order-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    // rc-resource-page-layout
    RcResourcePageLayoutComponent,
  ],
})
export class OrderTemplateComponent {
  private readonly orderFacade = inject(OrderFacade);
  private readonly routerFacade = inject(RouterFacade);

  readonly vm$ = combineLatest({
    dataList: this.orderFacade.all$,
    selectedOrderId: this.orderFacade.selectedId$,
    selectedOrder: this.orderFacade.selected$,
  });
}
