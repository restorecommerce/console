import { Component, Input } from '@angular/core';

import { UserService } from '@console-core/state';
import { IUser } from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-view-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">First name:</div>
          <div class="flex text align-right rc-lv-label">
            {{ user.firstName }}
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Last name:</div>
          <div class="flex text align-right rc-lv-label">
            {{ user.lastName }}
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Username:</div>
          <div class="flex text align-right rc-lv-label">
            {{ user.name }}
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Email:</div>
          <div class="flex text align-right rc-lv-label">
            <a href="mailto:{{ user.email }}">{{ user.email }}</a>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Active:</div>
          <div class="flex text align-right rc-lv-label">
            <span
              class="badge"
              [ngClass]="user.active ? 'success' : 'danger'"
            >
              {{ user.active ? 'Yes' : 'No' }}
            </span>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Locale:</div>
          <div class="flex text align-right rc-lv-label">
            {{ user.locale?.description }}
            <span class="badge rounded">
              {{ user.locale?.value }}
            </span>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Timezone:</div>
          <div class="flex text align-right rc-lv-label">
            {{ user.timezone?.description }}
            <span class="badge rounded">
              {{ user.timezone?.value }}
            </span>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Roles:</div>
          <div class="flex text align-right rc-lv-label">
            {{ getRoleAssociations(user) }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class IamViewDetailsComponent {
  @Input({ required: true }) user!: IUser;

  constructor(private readonly userService: UserService) {}

  getRoleAssociations(user: IUser): string {
    return this.userService.getRoleAssociations(user);
  }
}