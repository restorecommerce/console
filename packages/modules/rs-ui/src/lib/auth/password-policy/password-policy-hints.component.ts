import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { VCLFormControlGroupModule } from '@vcl/ng-vcl';

@Component({
  selector: 'rs-password-policy-hints',
  template: `
    <!-- Neutral always-visible hint -->
    <vcl-hint> Your password must: </vcl-hint>

    <!-- Only show dynamic stuff when user interacted -->
    @if (control && (control.touched || control.dirty)) { @if
    (control.errors?.['required']) {
    <vcl-hint-error> Password is required </vcl-hint-error>
    } @if (control.errors?.['rsZxcvbnMinScore']; as strengthErr) {
    <vcl-hint-error>
      {{ strengthErr.feedback?.warning || 'Your password is too weak.' }}
    </vcl-hint-error>

    <!-- Fixed policy checklist -->
    <vcl-hint-warning> - have at least 10 characters length </vcl-hint-warning>
    <vcl-hint-warning> - contain a lowercase letter </vcl-hint-warning>
    <vcl-hint-warning> - contain an uppercase letter </vcl-hint-warning>
    <vcl-hint-warning> - contain a number </vcl-hint-warning>
    <vcl-hint-warning> - contain a special character </vcl-hint-warning>
    } }
  `,
  imports: [VCLFormControlGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsPasswordPolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;
}
