import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { RsFieldPolicyHintsComponent } from './field-policy-hints.component';

@Component({
  selector: 'rs-password-policy-hints',
  template: `
    <rs-field-policy-hints
      [control]="control"
      header="Your password must:"
      requiredMessage="Password is required."
      patternErrorKey="rsZxcvbnMinScore"
      patternTitle="Your password does not meet the policy."
      [patternBullets]="[
        'have at least 10 characters in length',
        'contain a lowercase letter',
        'contain an uppercase letter',
        'contain a number',
        'contain a special character'
      ]"
    />
  `,
  imports: [RsFieldPolicyHintsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsPasswordPolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;
}
