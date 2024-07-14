import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { REGEX } from '@console-core/config';
import { ModeType } from '@console-core/graphql';
import { IamFacade } from '@console-core/state';
import { IUser } from '@console-core/types';

@Component({
  selector: 'app-module-management-iam-change-password-form',
  template: `
    <div class="mt-2">
      <form
        vclForm
        #formDirective="ngForm"
        [formGroup]="form"
        (ngSubmit)="onClickSave(formDirective)"
        class="form m-0"
      >
        <vcl-form-control-group>
          <vcl-label>New password</vcl-label>
          <vcl-password-input>
            <input
              vclInput
              class="input"
              [class.error]="
                formFields.password.hasError('required') &&
                formFields.password.touched
              "
              type="password"
              formControlName="password"
              name="password"
              autocomplete="false"
              minlength="6"
              maxlength="20"
            />
          </vcl-password-input>
          <vcl-hint-error error="required"
            >This field is required.</vcl-hint-error
          >
          <vcl-hint-error error="pattern">This field must: </vcl-hint-error>
          <vcl-hint-error error="pattern"
            >- have at least 6 characters length</vcl-hint-error
          >
          <vcl-hint-error error="pattern"
            >- contain a lowercase letter</vcl-hint-error
          >
          <vcl-hint-error error="pattern"
            >- contain a uppercase letter</vcl-hint-error
          >
          <vcl-hint-error error="pattern">- contain a number</vcl-hint-error>
          <vcl-hint-error error="pattern"
            >- contain a special character</vcl-hint-error
          >
        </vcl-form-control-group>

        <vcl-form-control-group>
          <vcl-label>Confirm password</vcl-label>
          <vcl-password-input>
            <input
              vclInput
              class="input"
              [class.error]="
                formFields.passwordConfirmation.hasError('required') &&
                formFields.passwordConfirmation.touched
              "
              type="password"
              formControlName="passwordConfirmation"
              name="passwordConfirmation"
            />
          </vcl-password-input>
          <vcl-hint-error error="required"
            >This field is required.</vcl-hint-error
          >
          <vcl-hint-error
            *ngIf="
              !formFields.password?.hasError('required') &&
              form?.hasError('passwordConfirmationMismatch')
            "
            >Fields New password and Confirm password must
            match.</vcl-hint-error
          >
        </vcl-form-control-group>

        <div class="row mb-4">
          <div class="flex align-right">
            <rc-submit-button [resetForm]="form">Save</rc-submit-button>
          </div>
        </div>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IamChangePasswordFormComponent {
  @Input({ required: true }) vm!: {
    id: string;
    user: IUser;
  };

  form = this.fb.group(
    {
      password: ['', [Validators.required, Validators.pattern(REGEX.password)]],
      passwordConfirmation: ['', Validators.required],
    },
    { validators: this.validatePasswordMatch }
  );

  get formFields() {
    return {
      password: this.form.get('password') as FormControl,
      passwordConfirmation: this.form.get(
        'passwordConfirmation'
      ) as FormControl,
    };
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly iamFacade: IamFacade
  ) {}

  onClickSave(formDirective: FormGroupDirective): void {
    if (this.form.invalid || this.form.pristine) {
      return;
    }

    this.iamFacade.changePassword({
      items: [
        {
          id: this.vm.id,
          password: this.formFields.password.value,
        },
      ],
      mode: ModeType.Update,
    });

    this.form.reset();
    formDirective.resetForm();
  }

  private validatePasswordMatch(
    control: AbstractControl
  ): Record<string, boolean> | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (password?.value !== passwordConfirmation?.value) {
      return { passwordConfirmationMismatch: true };
    }

    return null;
  }
}
