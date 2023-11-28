import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser;
}

export const buildAccountInformationSchema = ({
  user,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'id',
        label: 'User ID',
        type: 'input',
        disabled: true,
        defaultValue: user.id,
        params: {},
        hints: [],
      },
      {
        name: 'attributes',
        label: 'Roles',
        type: 'select',
        disabled: true,
        defaultValue: [true],
        params: {
          placeholder: 'Select role',
          selectionMode: 'multiple',
          clearable: false,
          search: false,
          options: [
            {
              label: 'Super Administrator',
              value: user.isSuperAdministrator,
            },
            {
              label: 'Administrator',
              value: user.isAdministrator,
            },
            {
              label: 'User',
              value: user.isUser,
            },
          ],
        },
        hints: [],
      },
    ],
  };
};
