import { Component, Input } from '@angular/core';

import { UserDetail } from '../../../models';

@Component({
  selector: 'app-iam-user-roles-tab',
  templateUrl: './iam-user-roles-tab.component.html',
  imports: [],
})
export class IAMUserRolesTabComponent {
  @Input({ required: true }) vm!: UserDetail;
}
