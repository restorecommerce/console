import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-confirm-email',
  template: `<p>confirm email works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmEmailComponent {}
