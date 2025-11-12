import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  selector: 'app-module-management-iam-change-password',
  template: `
    @if (vm$ | async; as vm) {
    <app-module-management-iam-change-password-form [vm]="vm" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IamChangePasswordComponent {
  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.iamFacade.setSelectedId(id);
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
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly iamFacade: IamFacade
  ) {}
}
