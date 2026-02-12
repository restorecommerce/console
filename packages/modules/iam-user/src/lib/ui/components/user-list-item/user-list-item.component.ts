import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { UserListItem } from '../../../models';
import { UserStatusBadgeComponent } from '../user-status-badge/user-status-badge.component';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  imports: [DatePipe, UserStatusBadgeComponent],
})
export class UserListItemComponent {
  @Input({ required: true })
  item!: UserListItem;
}
