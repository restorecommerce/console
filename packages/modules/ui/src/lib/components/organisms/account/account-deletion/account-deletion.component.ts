import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-account-account-deletion',
  templateUrl: './account-deletion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcAccountDeletionComponent {
  onDeleteAccount() {
    // TODO: Implement delete logic
    console.log('Account deletion');
  }
}
