import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  VCLBadgeComponent,
  VCLBusyIndicatorComponent,
  VCLDataListComponent,
  VCLDataListItemDirective,
} from '@vcl/ng-vcl';

interface AppUserListItem {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: 'active' | 'invited' | 'disabled';
}

@Component({
  selector: 'app-users-list',
  template: `
    <ng-template
      #userTemplate
      let-user
    >
      <div class="row justify-between align-items-center px-1 py-2">
        <div class="col">
          <div class="users-list-item-name">{{ user.name }}</div>
          <div class="users-list-item-email">{{ user.email }}</div>
        </div>

        <div class="users-list-item-meta">
          <vcl-badge [type]="user.status === 'active' ? 'success' : 'error'">
            {{ user.role || 'User' }}
            ·
            {{ user.status || 'active' }}
          </vcl-badge>
        </div>
      </div>
    </ng-template>

    <section class="col h-100p">
      <!-- Header -->
      <header class="row align-items-center px-2 py-2">
        <span class="flex">Users</span>

        <!-- Placeholder for future filters / actions -->
      </header>

      <!-- List -->
      <vcl-data-list
        [noBorder]="true"
        class="flex"
        mode="none"
      >
        @for (user of users; track user.id) {
        <vcl-data-list-item
          [routerLink]="[user.id, 'view']"
          routerLinkActive="selected"
        >
          <ng-container
            *ngTemplateOutlet="userTemplate; context: { $implicit: user }"
          ></ng-container>
        </vcl-data-list-item>
        }

        <vcl-busy-indicator class="p-3 w-100p"></vcl-busy-indicator>
      </vcl-data-list>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NgTemplateOutlet,
    VCLDataListComponent,
    VCLDataListItemDirective,
    VCLBusyIndicatorComponent,
    RouterLink,
    RouterLinkActive,
    VCLBadgeComponent,
  ],
})
export class UsersListComponent {
  // For now, static data; later you can wire this up to a facade or data-access lib
  protected readonly users: AppUserListItem[] = [
    {
      id: '1',
      name: 'Alice Admin',
      email: 'alice@example.com',
      role: 'admin',
      status: 'active',
    },
    {
      id: '2',
      name: 'Bob Manager',
      email: 'bob@example.com',
      role: 'manager',
      status: 'active',
    },
    {
      id: '3',
      name: 'Charlie Viewer',
      email: 'charlie@example.com',
      role: 'viewer',
      status: 'invited',
    },
  ];
}
