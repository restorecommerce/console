import { Component, Input } from '@angular/core';

import { UserAccessAssignmentVm } from '../../../models';

@Component({
  selector: 'app-iam-user-assigned-access-table',
  templateUrl: 'iam-user-assigned-access-table.component.html',
})
export class IAMUserAssignedAccessTable {
  @Input() manualAssignments: UserAccessAssignmentVm[] = [];
}
