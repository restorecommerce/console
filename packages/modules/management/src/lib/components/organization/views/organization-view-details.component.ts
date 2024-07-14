import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { IOrganization } from '@console-core/types';

@Component({
  selector: 'app-module-management-organization-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.organization.name; else naTemplate">
              <p>{{ vm.organization.name }}</p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Email:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.organization.email; else naTemplate">
              <p>
                <a
                  [href]="'mailto:' + vm.organization.email"
                  target="_blank"
                  >{{ vm.organization.email }}</a
                >
              </p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Website:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.organization.website; else naTemplate">
              <p>
                <a
                  [href]="vm.organization.website"
                  target="_blank"
                  >{{ vm.organization.website }}</a
                >
              </p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">VAT identification number:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="vm.organization.vatId; else naTemplate">
              <p>{{ vm.organization.vatId }}</p>
            </ng-container>
          </div>
        </li>
      </ul>

      <app-module-management-organization-parent-details [parent]="parent" />
    </div>

    <ng-template #naTemplate>N/A</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationDetailsComponent implements OnInit, OnChanges {
  @Input({ required: true }) vm!: {
    id: string;
    organization: IOrganization;
  };

  parent: IOrganization | null = null;

  ngOnInit(): void {
    this.updateParent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vm']) {
      this.updateParent();
    }
  }

  private updateParent(): void {
    this.parent = (this.vm.organization.parent as IOrganization) || null;
  }
}
