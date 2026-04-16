import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { InvoiceDetail } from '../../../models';

@Component({
  selector: 'app-invoice-detail-header',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, VCLBadgeComponent],
  templateUrl: './invoice-detail-header.component.html',
  styles: [
    `
      .text-upper {
        text-transform: uppercase;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceDetailHeaderComponent {
  @Input({ required: true }) invoice!: InvoiceDetail;
}
