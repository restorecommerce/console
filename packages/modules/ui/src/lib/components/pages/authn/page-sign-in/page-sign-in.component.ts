import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { IIoRestorecommerceUserLoginRequest } from '@console-core/graphql';
import { TInputData } from '@console-core/types';

@Component({
  selector: 'rc-page-authn-sign-in',
  templateUrl: 'page-sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignInComponent {
  @Input({ required: true })
  vm!: TInputData<{
    isLoading: boolean;
  }>;

  @Input({ required: true })
  login!: (payload: IIoRestorecommerceUserLoginRequest) => void;

  ROUTER = ROUTER;
}
