import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IIoRestorecommerceUserRegisterRequest } from '@console-core/graphql';
import { TInputData } from '@console-core/types';

@Component({
  selector: 'rc-page-sign-up',
  templateUrl: 'page-sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignUpComponent {
  @Input({ required: true })
  vm!: TInputData<{
    isLoading: boolean;
  }>;

  @Input({ required: true })
  register!: (payload: IIoRestorecommerceUserRegisterRequest) => void;
}
