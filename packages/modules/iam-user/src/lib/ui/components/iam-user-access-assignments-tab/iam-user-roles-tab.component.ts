import { Component, computed, input } from '@angular/core';

import { VCLTokenComponent } from '@vcl/ng-vcl';

import { UserDetail } from '../../../models';
import { IAMUserAssignedAccessTable } from '../iam-user-assigned-access-table/iam-user-assigned-access-table.component';
import { IAMUserSystemAccessTable } from '../iam-user-system-access-table/iam-user-system-access-table.component';

@Component({
  selector: 'app-iam-user-access-assignments-tab',
  templateUrl: './iam-user-access-assignments-tab.component.html',
  imports: [
    IAMUserAssignedAccessTable,
    IAMUserSystemAccessTable,
    VCLTokenComponent,
  ],
})
export class IAMUserAccessAssignmentsTabComponent {
  vm = input.required<UserDetail>();

  readonly systemAssignments = computed(() =>
    this.vm().accessAssignments.filter((x) => x.source === 'system')
  );

  readonly assignedAssignments = computed(() =>
    this.vm().accessAssignments.filter((x) => x.source === 'manual')
  );
}
