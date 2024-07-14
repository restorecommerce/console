import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IamFacade,
  OrganizationFacade,
  RoleFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-iam-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-module-management-iam-details [vm]="vm" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamViewComponent implements OnInit {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id ?? ('' as string)),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.iamFacade.setSelectedId(id);
        this.iamFacade.readOneById({ id });
      })
    ) as unknown as string,
    user: this.iamFacade.selected$.pipe(
      tap((user) => {
        if (!user) {
          this.iamFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.management.children.iam.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined()
    ),
    organizationsHash: this.organizationFacade.entities$,
    rolesHash: this.roleFacade.entities$,
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly iamFacade: IamFacade,
    private readonly organizationFacade: OrganizationFacade,
    private readonly roleFacade: RoleFacade
  ) {}

  ngOnInit(): void {
    this.roleFacade.read({});
    this.organizationFacade.read({});
  }
}
