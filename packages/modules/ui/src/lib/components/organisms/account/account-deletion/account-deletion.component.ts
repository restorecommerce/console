import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { SubSink } from 'subsink';

import { AlertService, AlertType } from '@vcl/ng-vcl';

import { AccountFacade } from '@console-core/state';
import { IUser } from '@console-core/types';

@Component({
  selector: 'rc-account-account-deletion',
  templateUrl: './account-deletion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDeletionComponent implements OnDestroy {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  isRequesting!: boolean;

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly alertService: AlertService,
    private readonly accountFacade: AccountFacade
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onDeleteAccount() {
    this.subscriptions.sink = this.alertService
      .open({
        text: 'Do you really want to delete your account?',
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        cancelButtonClass: 'transparent',
        confirmButtonLabel: 'Delete Account',
        confirmButtonClass: 'button',
      })
      .subscribe((result) => {
        if (!this.user?.id || result.action !== 'confirm') {
          return;
        }

        this.accountFacade.userDeleteRequest({
          ids: [this.user.id],
        });
      });
  }
}
