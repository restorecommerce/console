import { Component, Input } from '@angular/core';

import { VCLBadgeComponent } from '@vcl/ng-vcl';

import { UserStatus } from '../../../models';

@Component({
  selector: 'app-user-status-badge',
  template: `
    <vcl-badge [type]="getStatusType(status)">{{ status }}</vcl-badge>
  `,
  imports: [VCLBadgeComponent],
})
export class UserStatusBadgeComponent {
  @Input({ required: true })
  status!: UserStatus;

  getStatusType = (state: UserStatus) => {
    switch (state) {
      case UserStatus.ACTIVE:
        return 'success';
      case UserStatus.DISABLED:
        return 'error';
      default:
        return 'info';
    }
  };
}
