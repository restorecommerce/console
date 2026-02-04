import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RcResourcePageLayoutComponent } from '@console/rc-ui';

// import { FulfillmentListComponent } from '../../pages/fulfillment-list/fulfillment-list.component';

@Component({
  selector: 'app-module-fulfillment-template',
  templateUrl: './fulfillment-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RcResourcePageLayoutComponent,
    RouterOutlet,
    // FulfillmentListComponent,
  ],
})
export class FulfillmentTemplateComponent {}
