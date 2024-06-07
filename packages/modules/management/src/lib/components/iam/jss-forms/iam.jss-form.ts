import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ILocale, ITimezone, IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser | null;
  locales: ILocale[];
  timezones: ITimezone[];
}

export const buildUserSchema = ({
  user,
  locales,
  timezones,
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
        params: {},
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
            // TODO: Check timezone value should be available
            label: timezone.id,
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
