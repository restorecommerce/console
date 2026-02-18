import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { UserListItem } from '../../../models';
import { IAMUserStatusBadgeComponent } from '../iam-user-status-badge/iam-user-status-badge.component';

@Component({
  selector: 'app-iam-user-list-item',
  templateUrl: './iam-user-list-item.component.html',
  imports: [DatePipe, IAMUserStatusBadgeComponent],
})
export class IAMUserListItemComponent {
  @Input({ required: true })
  item!: UserListItem;
}
