import { Component, Input } from '@angular/core';

import { IRole } from '@console-core/types';

@Component({
  selector: 'app-module-management-role-view-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            {{ role.name }}
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Description:</div>
          <div class="flex text align-right rc-lv-label">
            {{ role.description }}
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Assignable by roles:</div>
          <div class="flex text align-right rc-lv-label">
            <pre>
              {{ role.assignableByRoles | json }}
              </pre
            >
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class RoleViewDetailsComponent {
  @Input({ required: true }) role!: IRole;
}
