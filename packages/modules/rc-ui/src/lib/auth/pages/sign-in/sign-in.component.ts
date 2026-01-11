import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { RcSignInAction, RcSignInState } from './sign-in.models';
import {
  DEFAULT_SIGN_IN_TRANSLATIONS,
  RcSignInTranslations,
} from './sign-in.i18n';
import { RcAuthLayoutConfig } from '../../auth.config';
import {
  VCLButtonModule,
  VCLCheckboxModule,
  VCLFormControlGroupModule,
  VCLInputModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';
import { RouterModule } from '@angular/router';
import { RsAuthLayoutComponent } from '../../layouts';
import { RcTranslatePipe } from '../../../i18n';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'rc-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [
    ReactiveFormsModule,
    VCLCheckboxModule,
    VCLButtonModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
    RouterModule,
    RsAuthLayoutComponent,
    RcTranslatePipe,
    AsyncPipe,
    NgClass,
  ],
})
export class RcSignInComponent {
  // config
  @Input({ required: true }) config!: RcAuthLayoutConfig;

  // workflow state
  @Input({ required: true }) state!: RcSignInState;

  // user intent
  @Output() action = new EventEmitter<RcSignInAction>();

  readonly form = new FormGroup({
    identifier: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    remember: new FormControl(false, { nonNullable: true }),
  });

  readonly t = computed<RcSignInTranslations>(() => ({
    ...DEFAULT_SIGN_IN_TRANSLATIONS,
    ...this.config.i18n?.signIn,
  }));

  submit(): void {
    if (this.form.invalid || this.state.loading) return;

    this.action.emit({
      type: 'submit',
      payload: this.form.getRawValue(),
    });
  }

  forgotPassword(): void {
    this.action.emit({ type: 'forgot-password' });
  }
}
