import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, tap } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, filterNullish } from '@console-core/state';

import { buildConfirmEmailSchema } from '../../jss-forms';

@Component({
  selector: 'app-account-confirm-email',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-page-account-confirm-email>
        <rc-account-confirm-email
          [user]="vm.user"
          [isRequesting]="vm.isRequesting"
          [confirmEmailFormSchema]="confirmEmailFormSchema"
        />
      </rc-page-account-confirm-email>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmEmailComponent {
  confirmEmailFormSchema!: VCLFormFieldSchemaRoot;
  private userFindRequestCalled = false;

  readonly vm$ = combineLatest({
    user: this.accountFacade.user$.pipe(
      filterNullish(),
      tap((user) => {
        if (!this.userFindRequestCalled) {
          this.accountFacade.userFindRequest({ id: user.id });
          this.userFindRequestCalled = true;
        }
      }),
      tap((user) => {
        this.confirmEmailFormSchema = buildConfirmEmailSchema({ user });
      })
    ),
    isRequesting: this.accountFacade.isRequesting$,
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
