import { Component, Input } from '@angular/core';

import { UserAccessAssignmentVm } from '../../../models';

@Component({
  selector: 'app-iam-user-system-access-table',
  templateUrl: 'iam-user-system-access-table.component.html',
})
export class IAMUserSystemAccessTable {
  @Input() systemAssignments: UserAccessAssignmentVm[] = [];
}
