import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser;
}

export const buildConfirmEmailSchema = ({
  user,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'newEmail',
        label: 'New Email',
        type: 'input',
        disabled: true,
        defaultValue: user.newEmail,
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
            label: 'Submit',
          },
          {
            type: 'button',
            label: 'Cancel',
            action: 'reset',
            class: 'transparent',
          },
        ],
      },
    ],
  };
};
