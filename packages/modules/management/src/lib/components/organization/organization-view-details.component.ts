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
  selector: 'app-module-management-organization-view-details',
  template: `
    <div class="data-list mb-0 p-0">
      <div class="my-2 rc-lv-l-heading">Data</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="organization.name; else naTemplate">{{
              organization.name
            }}</ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Email:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="organization.email; else naTemplate">
              <a
                [href]="'mailto:' + organization.email"
                target="_blank"
                >{{ organization.email }}</a
              >
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Website:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="organization.website; else naTemplate">
              <a
                [href]="organization.website"
                target="_blank"
                >{{ organization.website }}</a
              >
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">VAT identification number:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="organization.vatId; else naTemplate">{{
              organization.vatId
            }}</ng-container>
          </div>
        </li>
      </ul>

      <app-module-management-organization-parent-view-details
        [parent]="parent"
      />
    </div>

    <ng-template #naTemplate>N/A</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationViewDetailsComponent implements OnInit, OnChanges {
  @Input({ required: true }) organization!: IOrganization;

  parent: IOrganization | null = null;

  ngOnInit(): void {
    this.updateParent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['organization']) {
      this.updateParent();
    }
  }

  private updateParent(): void {
    this.parent = (this.organization.parent as IOrganization) || null;
  }
}
