import { Component, Input } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import { IRole } from '@console-core/types';

@Component({
  selector: 'app-module-management-role-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.role.name; else naTemplate">
              <p>{{ vm.role.name }}</p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Description:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.role.description; else naTemplate">
              <p>{{ vm.role.description }}</p>
            </ng-container>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Assignable by roles:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container
              *ngIf="vm.role.assignableByRoles.length; else naTemplate"
            >
              <ng-container *ngFor="let r of vm.role.assignableByRoles">
                <p class="m-0">
                  {{ vm.rolesHash[r]?.name ?? 'N/A' }}
                </p></ng-container
              >
            </ng-container>
          </div>
        </li>
      </ul>
    </div>

    <ng-template #naTemplate>N/A</ng-template>
  `,
  standalone: false,
})
export class RoleDetailsComponent {
  @Input({ required: true }) vm!: {
    id: string;
    role: IRole;
    rolesHash: Dictionary<IRole>;
  };
}
