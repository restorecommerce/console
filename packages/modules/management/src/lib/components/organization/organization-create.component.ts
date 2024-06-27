import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { OrganizationFacade } from '@console-core/state';

import { buildOrganizationSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-organization-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildOrganizationSchema({});
  create = this.organizationFacade.create;

  readonly vm$ = combineLatest({
    organization: this.organizationFacade.selected$,
  });

  constructor(private readonly organizationFacade: OrganizationFacade) {}
}
