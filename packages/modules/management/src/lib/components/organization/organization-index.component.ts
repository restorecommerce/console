import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  OrganizationFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-organization-index',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>Organizations</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrganizationIndexComponent {
  readonly vm$ = combineLatest({
    selectedOrganizationId: this.organizationFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.management.children.organizations.children.view.getLink(
            { id }
          )
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly organizationFacade: OrganizationFacade
  ) {}
}
