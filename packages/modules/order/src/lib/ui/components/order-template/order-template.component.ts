import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RcResourcePageLayoutComponent } from '@console/rc-ui';

import { OrderListComponent } from '../../pages/order-list/order-list.component';

@Component({
  selector: 'app-module-order-template',
  templateUrl: './order-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RcResourcePageLayoutComponent, RouterOutlet, OrderListComponent],
})
export class OrderTemplateComponent {}
