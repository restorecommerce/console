import { Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { EOrderStatus } from '../../../models';

@Component({
  selector: 'app-order-state-badge',
  template: `
    <vcl-badge [type]="getStatusType(state)">{{ state }}</vcl-badge>
  `,
  imports: [VCLBadgeComponent],
})
export class EOrderStatusBadgeComponent {
  @Input({ required: true })
  state!: EOrderStatus;

  getStatusType = (state: EOrderStatus) => {
    switch (state) {
      case EOrderStatus.Completed:
        return 'success';
      case EOrderStatus.Submitted:
        return 'primary';
      case EOrderStatus.Pending:
        return 'info';
      case EOrderStatus.Withdrawn:
        return 'warning';
      case EOrderStatus.Cancelled:
      case EOrderStatus.Invalid:
        return 'error';
      default:
        return 'info';
    }
  };
}
