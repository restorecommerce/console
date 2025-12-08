import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  VCLBadgeComponent,
  VCLBusyIndicatorComponent,
  VCLButtonComponent,
  VCLDataListComponent,
  VCLDataListItemDirective,
  VCLIconComponent,
  VCLInputModule,
  VCLPanelComponent,
  VCLPanelHeaderDirective,
} from '@vcl/ng-vcl';

import { IamFacade } from '@console-core/state';

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

    <vcl-panel class="h-100p">
      <vcl-panel-header>
        <header class="row justify-content-center align-items-center py-2">
          <div class="flex"></div>
          <span class="flex row justify-content-center overflow-ellipsis"
            >Users</span
          >
          <div class="flex row justify-content-end">
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
              title="Refresh"
            >
              <vcl-icon icon="mdi mdi-refresh"></vcl-icon>
            </button>
          </div>
        </header>
      </vcl-panel-header>

      <div class="row justify-between align-items-center py-2">
        <div class="flex">
          <vcl-input-field>
            <input
              placeholder="Search..."
              vclInput
            />
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
            >
              <vcl-icon icon="mdi mdi-magnify"></vcl-icon>
            </button>
          </vcl-input-field>
        </div>

        <button
          vcl-button
          square
          class="transparent"
          title="Open filter"
        >
          <vcl-icon icon="mdi mdi-filter"></vcl-icon>
        </button>
      </div>

      <vcl-data-list
        [noBorder]="true"
        class="flex"
        mode="single"
      >
        @for (user of users$ | async; track user.id) {
        <vcl-data-list-item
          [routerLink]="[user.id, 'view']"
          routerLinkActive="selected"
        >
          <ng-container
            *ngTemplateOutlet="userTemplate; context: { $implicit: user }"
          ></ng-container>
        </vcl-data-list-item>
        }

        <vcl-busy-indicator class="w-100p"></vcl-busy-indicator>
      </vcl-data-list>
    </vcl-panel>
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
    VCLInputModule,
    VCLButtonComponent,
    VCLIconComponent,
    VCLPanelHeaderDirective,
    VCLPanelComponent,
    VCLPanelHeaderDirective,
  ],
})
export class UsersListComponent {
  private readonly iamFacade = inject(IamFacade);

  users$ = this.iamFacade.all$;
}
