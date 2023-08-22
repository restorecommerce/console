import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-account-account-deletion',
  templateUrl: './account-deletion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDeletionComponent {
  onDeleteAccount() {
    console.log(
      '[Log] ~ file: account-deletion.component.ts:11 ~ RcAccountDeletionComponent ~ onDeleteAccount ~ onDeleteAccount'
    );
  }
}
