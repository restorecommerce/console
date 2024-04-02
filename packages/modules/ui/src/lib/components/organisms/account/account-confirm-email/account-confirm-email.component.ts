import { Component, Input, ViewChild } from '@angular/core';
import { Params } from '@angular/router';

import { JssFormComponent, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { AccountFacade, RouterFacade } from '@console-core/state';
import { IUser } from '@console-core/types';

@Component({
  selector: 'rc-account-confirm-email',
  templateUrl: 'account-confirm-email.component.html',
})
export class RcAccountConfirmEmailComponent {
  @Input({ required: true })
  user!: IUser | null;

  @Input({ required: true })
  confirmEmailFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('confirmEmailForm')
  confirmEmailForm!: JssFormComponent;

  readonly routerParams$ = this.routerFacade.params$;

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  onAction(_: string): void {
    this.confirmEmailForm.form.resetForm(this.confirmEmailForm.defaultValue);
  }

  onSubmit(params: Params) {
    if (
      this.confirmEmailForm.form.invalid ||
      this.confirmEmailForm.form.pristine
    ) {
      return;
    }

    const { code: activationCode, identifier } = params;
    this.accountFacade.userConfirmEmailChangeRequest({
      activationCode,
      identifier,
    });
  }
}
