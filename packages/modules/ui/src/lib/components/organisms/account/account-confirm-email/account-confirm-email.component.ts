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
  isRequesting!: boolean;

  @Input({ required: true })
  confirmEmailFormSchema!: VCLFormFieldSchemaRoot;

  @ViewChild('confirmEmailForm')
  confirmEmailForm!: JssFormComponent;

  readonly routerParams$ = this.routerFacade.params$;

  constructor(
    private readonly accountFacade: AccountFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  onConfirmEmailForm(params: Params) {
    const { code: activationCode, identifier } = params;
    this.accountFacade.userConfirmEmailChangeRequest({
      activationCode,
      identifier,
    });
  }
}
