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
    ],
  };
};
