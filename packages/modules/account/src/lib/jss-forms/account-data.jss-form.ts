import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

export const buildEmailSchema = (user: IUser): VCLFormFieldSchemaRoot => {
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
        validators: [Validators.required, Validators.minLength(3)],
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
            error: 'minlength',
            message: 'This field must have a length of at least 3 characters.',
          },
        ],
      },
      {
        name: 'password',
        label: 'New Password',
        type: 'password-input',
        // TODO: Add password strength validation
        validators: [Validators.required, Validators.minLength(8)],
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
            error: 'minlength',
            message: 'This field must have a length of at least 8 characters',
          },
        ],
      },
      {
        name: 'passwordConfirmation',
        label: 'New Password Confirmation',
        type: 'password-input',
        // TODO: Add password confirmation validator
        validators: [Validators.required, Validators.minLength(8)],
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
            error: 'minlength',
            message: 'This field must have a length of at least 8 characters',
          },
        ],
      },
    ],
  };
};
