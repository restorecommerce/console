import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { IOrganization } from '@console-core/types';

@Component({
  selector: 'app-module-management-organization-parent-details',
  template: `
    <div
      *ngIf="parent"
      class="data-list mb-0 p-0"
    >
      <div class="my-2 rc-lv-l-heading">Parent Organization</div>
      <ul class="data-list-body no-border">
        <li class="row data-list-item justify-between">
          <div class="flex text">Name:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="parent.name; else naTemplate">
              <p>
                <a
                  [routerLink]="
                    ROUTER.pages.main.children.management.children.organizations.children.view.getLink(
                      { id: parent.id }
                    )
                  "
                  >{{ parent.name }}</a
                >
              </p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Email:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="parent.email; else naTemplate">
              <p>
                <a
                  [href]="'mailto:' + parent.email"
                  target="_blank"
                  >{{ parent.email }}</a
                >
              </p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">Website:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="parent.website; else naTemplate">
              <p>
                <a
                  [href]="parent.website"
                  target="_blank"
                  >{{ parent.website }}</a
                >
              </p>
            </ng-container>
          </div>
        </li>
        <li class="row data-list-item justify-between">
          <div class="flex text">VAT identification number:</div>
          <div class="flex text align-right rc-lv-label">
            <ng-container *ngIf="parent.vatId; else naTemplate">
              <p>{{ parent.vatId }}</p>
            </ng-container>
          </div>
        </li>
      </ul>
    </div>

    <ng-template #naTemplate>N/A</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationParentDetailsComponent {
  ROUTER = ROUTER;
  @Input({ required: true }) parent?: IOrganization | null;
}
