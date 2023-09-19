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
  isDeleting!: boolean;

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
        title: 'Delete account',
        type: AlertType.Question,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonLabel: 'Cancel',
        confirmButtonLabel: 'Delete Account',
      })
      .subscribe((result) => {
        if (result.action !== 'confirm') {
          return;
        }
        if (!this.user?.id) {
          return;
        }
        this.accountFacade.userDeleteRequest({
          ids: [this.user.id],
        });
      });
  }
}
