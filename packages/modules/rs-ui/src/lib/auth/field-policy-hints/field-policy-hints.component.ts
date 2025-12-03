import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { VCLFormControlGroupModule } from '@vcl/ng-vcl';

interface RsExtraErrorConfig {
  key: string; // e.g. 'email', 'minlength'
  message: string; // message to show when that error is present
}

@Component({
  selector: 'rs-field-policy-hints',
  template: `
    <!-- Optional neutral header -->
    <vcl-hint *ngIf="header">
      {{ header }}
    </vcl-hint>

    @if (control && (control.touched || control.dirty)) {
    <!-- Required -->
    @if (control.hasError('required')) {
    <vcl-hint-error>
      {{ requiredMessage }}
    </vcl-hint-error>
    }

    <!-- Pattern / rule error -->
    @if (control.hasError(patternErrorKey)) {
    <!--  -->
    @if (patternTitle) {
    <vcl-hint-error>
      {{ patternTitle }}
    </vcl-hint-error>
    }
    <!--  -->
    @for (bullet of patternBullets; track $index) {
    <!--  -->
    <vcl-hint-warning> - {{ bullet }} </vcl-hint-warning>
    } }

    <!--  -->
    <!-- Extra error keys (email, minlength, etc.) -->
    @for ( extra of extraErrors; track extra.key) {
    <!--  -->
    @if (control.hasError(extra.key)) {
    <vcl-hint-error>
      {{ extra.message }}
    </vcl-hint-error>
    } } }
  `,
  imports: [VCLFormControlGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsFieldPolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;

  /** Optional neutral text above everything, e.g. 'Your password must:' */
  @Input() header: string | null = null;

  /** Message for the 'required' error */
  @Input() requiredMessage = 'This field is required.';

  /** Error key used for pattern / rule violations (default 'pattern') */
  @Input() patternErrorKey = 'pattern';

  /** Title shown once before bullets, e.g. 'This field must:' */
  @Input() patternTitle: string | null = 'This field must:';

  /** Bullet lines describing the rules */
  @Input() patternBullets: string[] = [];

  /** Extra error keys (email, minlength, etc.) with simple messages */
  @Input() extraErrors: RsExtraErrorConfig[] = [];
}
