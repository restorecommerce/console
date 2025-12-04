import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
    @if (vm$ | async; as vm) {
    <h3>IAM</h3>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class IamIndexComponent {
  private readonly router = inject(Router);
  private readonly IamFacade = inject(IamFacade);

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
}
