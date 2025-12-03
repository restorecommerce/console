import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { RsFieldPolicyHintsComponent } from './field-policy-hints.component';

@Component({
  selector: 'rs-email-policy-hints',
  template: `
    <rs-field-policy-hints
      [control]="control"
      header="Your email must:"
      requiredMessage="Email is required."
      patternErrorKey="email"
      patternTitle="Please enter a valid email address."
      [patternBullets]="['be in the format name@example.com']"
    />
  `,
  imports: [RsFieldPolicyHintsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsEmailPolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;
}
