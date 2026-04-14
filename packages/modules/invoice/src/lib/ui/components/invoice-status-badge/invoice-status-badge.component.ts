import { Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { InvoiceStatus } from '../../../models';

@Component({
  selector: 'app-invoice-status-badge',
  template: `
    <vcl-badge [type]="getStatusType(status)">{{ status }} </vcl-badge>
  `,
  imports: [VCLBadgeComponent],
})
export class InvoiceStatusBadgeComponent {
  @Input({ required: true })
  status!: InvoiceStatus;

  getStatusType = (_: InvoiceStatus) => {
    return 'info' as const;
  };
}
