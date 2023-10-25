import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, AppFacade } from '@console-core/state';
import { ENotificationTypes, IUser } from '@console-core/types';

import { RcActiveFormService } from '../../../../services';

@Component({
  selector: 'rc-account-account-data',
  templateUrl: './account-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDataComponent {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  isRequesting!: boolean;

  @Input({ required: true })
  emailFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('emailForm')
  emailForm!: JssFormComponent;

  @Input({ required: true })
  passwordFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('passwordForm')
  passwordForm!: JssFormComponent;

  activeFrom$ = this.activeFormService.active$;

  constructor(
    private readonly activeFormService: RcActiveFormService,
    private readonly appFacade: AppFacade,
    private readonly accountFacade: AccountFacade
  ) {}

  onSaveEmailForm(): void {
    this.activeFormService.setActive('profileAccountDataEmail');
    this.accountFacade.userChangeEmailRequest({
      identifier: this.user?.name || '',
      newEmail: this.emailForm.form.value.email,
    });
  }

  onSavePasswordForm(): void {
    const { currentPassword, password, passwordConfirmation } =
      this.passwordForm.form.value;

    if (password !== passwordConfirmation) {
      this.appFacade.addNotification({
        type: ENotificationTypes.ERROR,
        content: 'New password and new password confirmation must match',
      });
      return;
    }

    this.activeFormService.setActive('profileAccountDataPassword');
    this.accountFacade.userChangePasswordRequest({
      password: currentPassword,
      newPassword: password,
    });

    this.passwordForm.form.reset();
  }
}
