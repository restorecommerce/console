import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

export const buildAccountInformationSchema = (
  user: IUser
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'id',
        label: 'User ID',
        type: 'input',
        disabled: true,
        defaultValue: user.id,
        validators: [Validators.required],
        params: {},
        hints: [],
      },
    ],
  };
};
