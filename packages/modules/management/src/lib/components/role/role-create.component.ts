import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { RoleFacade } from '@console-core/state';

import { buildRoleSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-role-create',
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
export class RoleCreateComponent {
  schema!: VCLFormFieldSchemaRoot;
  create = this.roleFacade.create;

  readonly vm$ = combineLatest({
    role: this.roleFacade.selected$,
    allDistinctAssignableByRoles: this.roleFacade.allDistinctAssignableByRoles$,
  }).pipe(
    tap(({ allDistinctAssignableByRoles }) => {
      const assignableByRoles = allDistinctAssignableByRoles || [];
      this.schema = buildRoleSchema({ assignableByRoles });
    })
  );

  constructor(private readonly roleFacade: RoleFacade) {}
}
