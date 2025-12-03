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
    <vcl-hint-error error="required">
      {{ requiredMessage }}
    </vcl-hint-error>

    @if (patternTitle) {
    <vcl-hint-error [error]="patternErrorKey">
      {{ patternTitle }}
    </vcl-hint-error>
    } @for (bullet of patternBullets; track $index) {
    <vcl-hint-warning> - {{ bullet }} </vcl-hint-warning>
    } @for (extra of extraErrors; track extra.key) {
    <vcl-hint-error [error]="extra.key">
      {{ extra.message }}
    </vcl-hint-error>
    }
  `,
  imports: [VCLFormControlGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsFieldPolicyHintsComponent {
  @Input({ required: true }) control!: AbstractControl | null;

  @Input() requiredMessage = 'This field is required.';
  @Input() patternErrorKey = 'pattern';
  @Input() patternTitle: string | null = 'This field must:';
  @Input() patternBullets: string[] = [];
  @Input() extraErrors: RsExtraErrorConfig[] = [];
}
