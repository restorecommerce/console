import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ILocale, IRole, ITimezone, IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser | null;
  locales: ILocale[];
  timezones: ITimezone[];
  roles: IRole[];
}

export const buildUserSchema = ({
  user,
  locales,
  timezones,
  roles,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'firstName',
        label: 'First name',
        type: 'input',
        ...(user ? { defaultValue: user.firstName } : {}),
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
        label: 'Last name',
        type: 'input',
        ...(user ? { defaultValue: user.lastName } : {}),
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
        name: 'name',
        label: 'Username',
        type: 'input',
        ...(user ? { defaultValue: user.name } : {}),
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
        name: 'email',
        label: 'Email',
        type: 'input',
        ...(user ? { defaultValue: user.email } : {}),
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
        name: 'active',
        label: 'Active',
        type: 'checkbox',
        ...(user ? { defaultValue: user.active } : { defaultValue: true }),
        validators: [],
        params: {},
        hints: [],
      },
      {
        name: 'localeId',
        label: 'Locale',
        type: 'select',
        ...(user ? { defaultValue: user.localeId } : {}),
        validators: [Validators.required],
        params: {
          options: locales.map((locale) => ({
            label: locale.value,
            sublabel: locale.description,
            value: locale.id,
          })),
        },
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
        ],
      },
      {
        name: 'timezoneId',
        label: 'Timezone',
        type: 'select',
        ...(user ? { defaultValue: user.timezoneId } : {}),
        validators: [Validators.required],
        params: {
          options: timezones.map((timezone) => ({
            label: timezone.value,
            sublabel: timezone.description,
            value: timezone.id,
          })),
        },
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
        ],
      },

      {
        name: 'roleAssociations',
        label: 'Role associations',
        type: 'array',
        initialFields: 1,
        fieldLabel: (index) => `Role ${index + 1}`,
        noFieldsLabel: 'No role associations',
        field: {
          name: 'roles',
          type: 'object',
          fields: [
            {
              name: 'roles',
              label: 'Role',
              type: 'select',
              // ...(user
              //   ? {
              //       defaultValue: user.roles?.map((role) => role.id),
              //     }
              //   : {}),
              validators: [Validators.required],
              params: {
                placeholder: 'Select role',
                selectionMode: 'single',
                clearable: true,
                search: false,
                options: roles.map((role) => ({
                  label: role.name,
                  sublabel: role.description,
                  value: role.id,
                })),
              },
              hints: [
                {
                  type: 'error',
                  error: 'required',
                  message: 'This field is required.',
                },
              ],
            },
            {
              name: 'organizationId',
              label: 'Organization',
              type: 'input',
              defaultValue: '',
              validators: [Validators.required],
              hints: [
                {
                  type: 'error',
                  error: 'required',
                  message: 'This field is required.',
                },
              ],
            },
          ],
        },
        // TODO: Check to add validators
        // validators: [Validators.required],
        // params: {},
        // hints: [
        //   {
        //     type: 'error',
        //     error: 'required',
        //     message: 'This field is required.',
        //   },
        // ],
      },
      {
        type: 'buttons',
        buttons: [
          {
            type: 'button',
            label: 'Cancel',
            action: 'reset',
            class: 'transparent',
          },
          {
            type: 'submit',
            label: 'Save',
          },
        ],
      },
    ],
  };
};
