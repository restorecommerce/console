import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ROUTER } from '@console-core/config';
import { TInputData } from '@console-core/types';

@Component({
  selector: 'rc-page-sign-in',
  templateUrl: 'page-sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPageSignInComponent {
  @Input()
  vm!: TInputData<{
    isLoading: boolean;
    error: string | null;
  }>;

  @Input()
  login!: (payload: { email: string; password: string }) => void;

  ROUTER = ROUTER;
}
