import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  RoleFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-role-index',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Roles</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RoleIndexComponent {
  readonly vm$ = combineLatest({
    selectedRoleId: this.roleFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.management.children.accessControl.children.roles.children.view.getLink(
            { id }
          )
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly roleFacade: RoleFacade
  ) {}
}
