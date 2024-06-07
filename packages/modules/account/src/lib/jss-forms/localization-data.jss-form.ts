import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ILocale, ITimezone, IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser | null;
  locales: ILocale[];
  timezones: ITimezone[];
}

export const buildLocalizationDataSchema = ({
  user,
  locales,
  timezones,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'localeId',
        label: 'Locale',
        type: 'select',
        defaultValue: user?.localeId,
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
        defaultValue: user?.timezoneId,
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
