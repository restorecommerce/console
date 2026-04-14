import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RcResourcePageLayoutComponent } from '@console/rc-ui';

import { InvoiceListComponent } from '../../pages/invoice-list/invoice-list.component';

@Component({
  selector: 'app-module-invoice-template',
  templateUrl: './invoice-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RcResourcePageLayoutComponent, InvoiceListComponent],
})
export class InvoiceTemplateComponent {}
