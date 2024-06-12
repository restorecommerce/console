import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IamFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-iam-view',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-management-iam-view [user]="vm.user" />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamViewComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.iamFacade.setSelectedId(id);
        this.iamFacade.readOneById({ id });
      })
    ),
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
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly iamFacade: IamFacade
  ) {}
}
