import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RcPasswordRecoveryState } from './password-recovery.models';
import { AsyncPipe } from '@angular/common';
import { RcTranslatePipe } from '../../../i18n';
import { RsAuthLayoutComponent } from '../../layouts';
import {
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';
import { RcAuthLayoutConfig } from '../../auth.config';
import {
  DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS,
  RcPasswordRecoveryTranslations,
} from './password-recovery.i18n';

@Component({
  selector: 'rc-password-recovery',
  templateUrl: './password-recovery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
    RsAuthLayoutComponent,
    RcTranslatePipe,
    AsyncPipe,
  ],
})
export class RcPasswordRecoveryComponent {
  @Input({ required: true }) config!: RcAuthLayoutConfig;
  @Input({ required: true }) state!: RcPasswordRecoveryState;

  @Output() requestReset = new EventEmitter<{ identifier: string }>();
  @Output() submitNewPassword = new EventEmitter<{ password: string }>();

  readonly t = computed<RcPasswordRecoveryTranslations>(() => ({
    ...DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS,
    ...this.config.i18n?.passwordRecovery,
  }));

  private readonly fb = inject(FormBuilder);

  readonly identifierForm = this.fb.nonNullable.group({
    identifier: ['', Validators.required],
  });

  readonly passwordForm = this.fb.nonNullable.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  submitIdentifier(): void {
    if (this.identifierForm.invalid) return;

    this.requestReset.emit({
      identifier: this.identifierForm.value.identifier!,
    });
  }

  submitPassword(): void {
    if (this.passwordForm.invalid) return;

    this.submitNewPassword.emit({
      password: this.passwordForm.value.password!,
    });
  }
}
