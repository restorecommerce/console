import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

export const buildPersonalDataSchema = (
  user: IUser
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'input',
        defaultValue: user.firstName,
        validators: [Validators.required],
        params: {},
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
        ],
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'input',
        defaultValue: user.lastName,
        validators: [Validators.required],
        params: {},
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
        ],
      },
    ],
  };
};
