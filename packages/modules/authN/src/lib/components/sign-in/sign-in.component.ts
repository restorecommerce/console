import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  VCLCheckboxModule,
  VCLInputModule,
  VCLFormControlGroupModule,
  VCLPasswordInputModule,
} from '@vcl/ng-vcl';
@Component({
  selector: 'app-authn-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    VCLCheckboxModule,
    VCLInputModule,
    VCLFormControlGroupModule,
    VCLPasswordInputModule,
  ],
})
export class LogInComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    identifier: ['', []],
    password: ['', []],
    remember: [false, []],
  });

  get formFields() {
    return {
      identifier: this.form.get('identifier') as FormControl,
      password: this.form.get('password') as FormControl,
      remember: this.form.get('remember') as FormControl,
    };
  }
}
