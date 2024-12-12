import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  RoleFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-role-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <app-module-management-role-details [vm]="vm" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RoleViewComponent implements OnInit {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.roleFacade.setSelectedId(id);
        this.roleFacade.readOneById({ id });
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
    rolesHash: this.roleFacade.entities$,
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly roleFacade: RoleFacade
  ) {}

  ngOnInit(): void {
    this.roleFacade.read({});
  }
}
