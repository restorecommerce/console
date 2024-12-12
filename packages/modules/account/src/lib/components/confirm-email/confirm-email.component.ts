import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, filterNullish } from '@console-core/state';

import { buildConfirmEmailSchema } from '../../jss-forms';

@Component({
  selector: 'app-account-confirm-email',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <rc-account-confirm-email
        [user]="vm.user"
        [confirmEmailFormSchema]="confirmEmailFormSchema"
      />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
  });

  constructor(private readonly accountFacade: AccountFacade) {}
}
