import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  RoleFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { JssFormService } from './services';

@Component({
  selector: 'app-module-management-role-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="vm.schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  providers: [JssFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RoleEditComponent implements OnDestroy {
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
    schema: this.jssFormService.roleSchema$,
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly roleFacade: RoleFacade,
    private readonly jssFormService: JssFormService
  ) {}

  ngOnDestroy(): void {
    this.jssFormService.destroy();
  }
}
