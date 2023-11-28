import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { REGEX } from '@console-core/config';
import { IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser;
}

export const buildEmailSchema = ({
  user,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        defaultValue: user.email,
        validators: [Validators.required, Validators.email],
        params: {},
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'email',
            message: 'This field should be a valid email address.',
          },
        ],
      },
      {
        type: 'buttons',
        buttons: [
          {
            type: 'submit',
            label: 'Change Email',
          },
          {
            type: 'button',
            label: 'Cancel',
            action: 'resetEmailForm',
            class: 'transparent',
          },
        ],
      },
    ],
  };
};

export const buildPasswordSchema = (): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'currentPassword',
        label: 'Current Password',
        type: 'password-input',
        validators: [Validators.required, Validators.pattern(REGEX.password)],
        params: {},
        required: true,
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'pattern',
            message: 'This field must:',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- have at least 6 characters length',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a lowercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a uppercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a number',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a special character',
          },
        ],
      },
      {
        name: 'password',
        label: 'New Password',
        type: 'password-input',
        validators: [Validators.required, Validators.pattern(REGEX.password)],
        params: {},
        required: true,
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'pattern',
            message: 'This field must:',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- have at least 6 characters length',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a lowercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a uppercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a number',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a special character',
          },
        ],
      },
      {
        name: 'passwordConfirmation',
        label: 'New Password Confirmation',
        type: 'password-input',
        validators: [Validators.required, Validators.pattern(REGEX.password)],
        params: {},
        required: true,
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'pattern',
            message: 'This field must:',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- have at least 6 characters length',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a lowercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a uppercase letter',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a number',
          },
          {
            type: 'error',
            error: 'pattern',
            message: '- contain a special character',
          },
        ],
      },
      {
        type: 'buttons',
        buttons: [
          {
            type: 'submit',
            label: 'Change Password',
          },
          {
            type: 'button',
            label: 'Cancel',
            action: 'resetPasswordForm',
            class: 'transparent',
          },
        ],
      },
    ],
  };
};
