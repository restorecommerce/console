import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  RoleFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildRoleSchema } from './jss-forms';

@Component({
  selector: 'app-module-management-role-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.roleFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.roleFacade.setSelectedId(id);
      })
    ),
    role: this.roleFacade.selected$.pipe(
      tap((role) => {
        if (!role) {
          this.roleFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.accessControl.children.roles.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    allDistinctAssignableByRoles: this.roleFacade.allDistinctAssignableByRoles$,
  }).pipe(
    tap(({ role, allDistinctAssignableByRoles }) => {
      const assignableByRoles = allDistinctAssignableByRoles || [];
      this.schema = buildRoleSchema({ role, assignableByRoles });
    })
  );

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly roleFacade: RoleFacade
  ) {}
}
