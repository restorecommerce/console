import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser;
}

export const buildAccountInformationSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'id',
        label: 'User ID',
        type: 'input',
        disabled: true,
        defaultValue: options.user.id,
        validators: [Validators.required],
        params: {},
        hints: [],
      },
    ],
  };
};
