import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IamFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

@Component({
  selector: 'app-module-management-iam-index',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <h3>IAM</h3>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamIndexComponent {
  readonly vm$ = combineLatest({
    selectedUserId: this.IamFacade.selectedId$.pipe(
      filterEmptyAndNullishAndUndefined(),
      tap((id) => {
        this.router.navigate(
          ROUTER.pages.main.children.management.children.iam.children.view.getLink(
            { id }
          )
        );
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly IamFacade: IamFacade
  ) {}
}
