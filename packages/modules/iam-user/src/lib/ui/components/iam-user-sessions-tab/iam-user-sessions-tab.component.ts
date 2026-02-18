import { Component, Input } from '@angular/core';

import { UserDetail } from '../../../models';

@Component({
  selector: 'app-iam-user-sessions-tab',
  templateUrl: './iam-user-sessions-tab.component.html',
  imports: [],
})
export class IAMUserSessionsTabComponent {
  @Input({ required: true }) vm!: UserDetail;
}
