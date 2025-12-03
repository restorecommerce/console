// rs-username-policy-hints.component.ts
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { RsFieldPolicyHintsComponent } from './field-policy-hints.component';

@Component({
  selector: 'rs-username-policy-hints',
  template: `
    <rs-field-policy-hints
      [control]="control"
      header="Your username must:"
      requiredMessage="This field is required."
      patternErrorKey="pattern"
      patternTitle="This field must:"
      [patternBullets]="[
        'have at least 8 characters in length',
        'start with a letter (lowercase or uppercase)',
        'contain only letters (lowercase or uppercase), numbers, and the characters . - _ @',
        'not have any consecutive characters repeated'
      ]"
      [extraErrors]="[
        { key: 'minlength', message: 'Must be at least 8 characters long.' }
      ]"
    />
  `,
  imports: [RsFieldPolicyHintsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsUsernamePolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;
}
