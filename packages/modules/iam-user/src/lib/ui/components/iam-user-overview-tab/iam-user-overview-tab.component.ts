import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { UserDetail } from '../../../models';
import { IAMUserStatusBadgeComponent } from "../iam-user-status-badge/iam-user-status-badge.component";

@Component({
  selector: 'app-iam-user-overview-tab',
  templateUrl: './iam-user-overview-tab.component.html',
  imports: [DatePipe, IAMUserStatusBadgeComponent],
})
export class IAMUserOverviewTabComponent {
  @Input({ required: true }) vm!: UserDetail;
}
