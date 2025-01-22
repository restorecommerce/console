import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';

import { DATE } from '@console-core/config';
import { UserService } from '@console-core/state';
import {
  IOrganization,
  IRole,
  IRoleAssociationScopingInstance,
  IUser,
} from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">First name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.user.firstName; else naTemplate">
              <p>
                {{ vm.user.firstName }}
              </p>
            </ng-container>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Last name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.user.lastName; else naTemplate">{{
              vm.user.lastName
            }}</ng-container>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Username:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.user.name; else naTemplate">
              <p>
                {{ vm.user.name }}
              </p>
            </ng-container>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Email:</div>
          <div class="flex text align-right rc-lv-label">
            <p>
              <a href="mailto:{{ vm.user.email }}">{{ vm.user.email }}</a>
            </p>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Active:</div>
          <div class="flex text align-right rc-lv-label">
            <p>
              <span
                class="badge"
                [ngClass]="vm.user.active ? 'success' : 'danger'"
              >
                {{ vm.user.active ? 'Yes' : 'No' }}
              </span>
            </p>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Locale:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.user.locale?.value; else naTemplate">
              <ng-container *ngIf="vm.user.locale?.description">
                <p class="m-0">
                  {{ vm.user.locale?.description }}
                </p>
              </ng-container>
              <p class="mb-2">
                <span class="badge rounded">
                  {{ vm.user.locale?.value }}
                </span>
              </p>
            </ng-container>
          </div>
        </li>

        <li class="row data-list-item justify-between">
          <div class="flex text">Timezone:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.user.timezone?.value; else naTemplate">
              <ng-container *ngIf="vm.user.timezone?.description">
                <p class="m-0">
                  {{ vm.user.timezone?.description }}
                </p>
              </ng-container>
              <p class="mb-3">
                <span class="badge rounded">
                  {{ vm.user.timezone?.value }}
                </span>
              </p>
            </ng-container>
          </div>
        </li>

        <li
          *ngIf="vm.rolesHash; else naTemplate"
          class="row data-list-item justify-between"
        >
          <div class="flex text pb-2">Roles:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container
              *ngIf="
                vm.user.roleAssociations.length && roleScopingInstances.length;
                else naTemplate
              "
            >
              <ng-container *ngFor="let rai of roleScopingInstances">
                <p class="m-0">
                  {{ rai.role?.name ?? 'N/A' }} [{{
                    rai.organization?.name ?? 'N/A'
                  }}]
                </p></ng-container
              >
            </ng-container>
          </div>
        </li>

        <li>
          <div
            (click)="showTokens = !showTokens"
            class="row align-items-center token-toggler my-2 user-select-none"
          >
            <vcl-icon
              [icon]="showTokens ? 'vcl:arrow-down' : 'vcl:arrow-right'"
              alt="toggle token display"
              class="scale155p"
            ></vcl-icon>

            <span class="scale110p">Tokens ({{ vm.user.tokens?.length }})</span>
          </div>

          @if (showTokens) {
          <vcl-data-list
            mode="none"
            [noBorder]="true"
          >
            @for (item of vm.user.tokens; track $index) {
            <vcl-data-list-item>
              <ng-container
                *ngTemplateOutlet="
                  tokenItemTemplate;
                  context: { $implicit: item }
                "
              ></ng-container>
            </vcl-data-list-item>
            }
          </vcl-data-list>
          }
        </li>
      </ul>
    </div>

    <ng-template #naTemplate>N/A</ng-template>

    <ng-template
      #tokenItemTemplate
      let-item
      let-index="index"
    >
      <div class="mb-2">
        <div class="row justify-between align-items py-1">
          <span class="flex text">Name:</span>
          <span>{{ item.name || '-' }}</span>
        </div>
        <div class="row justify-between align-items py-1">
          <span class="flex text">Token:</span>
          <span> {{ item.token }}</span>
        </div>
        <div class="row justify-between align-items py-1">
          <span class="flex text">Last login:</span>
          <span>{{
            (item.lastLogin | date : DATE.format.dateTime) || '-'
          }}</span>
        </div>
        <div class="row justify-between align-items py-1">
          <span class="flex text">Expires in:</span>
          <span>{{
            (item.expiresIn | date : DATE.format.dateTime) || '-'
          }}</span>
        </div>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .token-toggler {
        cursor: pointer;
      }
    `,
  ],
  standalone: false,
})
export class IamDetailsComponent implements OnInit, OnChanges {
  @Input({ required: true }) vm!: {
    id: string;
    user: IUser;
    organizationsHash: Dictionary<IOrganization>;
    rolesHash: Dictionary<IRole>;
  };

  roleScopingInstances: IRoleAssociationScopingInstance[] = [];

  showTokens = false;

  DATE = DATE;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.updateRoleScopingInstances();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vm']) {
      this.updateRoleScopingInstances();
    }
  }

  private updateRoleScopingInstances(): void {
    this.roleScopingInstances =
      this.userService.getRoleAssociationsScopingInstances(
        this.vm.user.roleAssociations,
        this.vm.rolesHash,
        this.vm.organizationsHash
      );
  }
}
