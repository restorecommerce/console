import { Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { IIoRestorecommerceUserRequestPasswordChangeRequest } from '@console-core/graphql';
import { TInputData } from '@console-core/types';

@Component({
  selector: 'rc-page-authn-password-recovery',
  templateUrl: 'page-password-recovery.component.html',
})
export class RcPagePasswordRecoveryComponent {
  @Input({ required: true })
  vm!: TInputData<{
    isLoading: boolean;
  }>;

  @Input({ required: true })
  passwordRecovery!: (
    payload: IIoRestorecommerceUserRequestPasswordChangeRequest
  ) => void;

  ROUTER = ROUTER;
}
