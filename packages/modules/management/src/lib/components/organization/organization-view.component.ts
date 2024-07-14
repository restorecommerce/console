import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  OrganizationFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-organization-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-module-management-organization-details [vm]="vm" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.organizationFacade.setSelectedId(id);
        this.organizationFacade.readOneById({ id });
      })
    ),
    organization: this.organizationFacade.selected$.pipe(
      tap((organization) => {
        if (!organization) {
          this.organizationFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.organizations.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly organizationFacade: OrganizationFacade
  ) {}
}
