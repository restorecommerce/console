import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, AppFacade } from '@console-core/state';
import { ENotificationTypes, IUser } from '@console-core/types';

@Component({
  selector: 'rc-account-account-data',
  templateUrl: './account-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDataComponent {
  @Input({ required: true })
  user!: IUser;

  @Input({ required: true })
  emailFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('emailForm')
  emailForm!: JssFormComponent;

  @Input({ required: true })
  passwordFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('passwordForm')
  passwordForm!: JssFormComponent;

  constructor(
    private readonly appFacade: AppFacade,
    private readonly accountFacade: AccountFacade
  ) {}

  onAction(action: string): void {
    if (action === 'resetEmailForm') {
      this.emailForm.form.resetForm(this.emailForm.defaultValue);
    } else if (action === 'resetPasswordForm') {
      this.passwordForm.form.resetForm(this.passwordForm.defaultValue);
    }
  }

  onSaveEmailForm(): void {
    if (this.emailForm.form.invalid || this.emailForm.form.pristine) {
      return;
    }

    this.accountFacade.userChangeEmailRequest({
      identifier: this.user.name,
      newEmail: this.emailForm.form.value.email,
    });
  }

  onSavePasswordForm(): void {
    if (this.passwordForm.form.invalid || this.passwordForm.form.pristine) {
      return;
    }

    const { currentPassword, password, passwordConfirmation } =
      this.passwordForm.form.value;

    if (password !== passwordConfirmation) {
      this.appFacade.addNotification({
        type: ENotificationTypes.ERROR,
        content: 'New password and new password confirmation must match',
      });
      return;
    }

    this.accountFacade.userChangePasswordRequest({
      password: currentPassword,
      newPassword: password,
    });

    this.passwordForm.form.reset();
  }
}
