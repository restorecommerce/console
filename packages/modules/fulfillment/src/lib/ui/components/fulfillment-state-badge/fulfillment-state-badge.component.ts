import { Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { FulfillmentState } from '../../../models';

@Component({
  selector: 'app-fulfillment-state-badge',
  template: `
    <vcl-badge [type]="getStatusType(state)">{{ state }}</vcl-badge>
  `,
  imports: [VCLBadgeComponent],
})
export class FulfillmentStateBadgeComponent {
  @Input({ required: true })
  state!: FulfillmentState;

  getStatusType = (state: FulfillmentState) => {
    switch (state) {
      case 'COMPLETE':
      case 'RETOURE_COMPLETE':
        return 'success';
      case 'SUBMITTED':
      case 'IN_TRANSIT':
        return 'primary';
      case 'PENDING':
        return 'info';
      case 'RETOURE':
      case 'WITHDRAWN':
        return 'warning';
      case 'FAILED':
      case 'CANCELLED':
      case 'INVALID':
        return 'error';
      default:
        return 'info';
    }
  };
}
