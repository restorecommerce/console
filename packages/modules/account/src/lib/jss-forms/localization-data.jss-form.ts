import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  IIoRestorecommerceTimezoneTimezone,
  IoRestorecommerceLocaleLocale,
} from '@console-core/graphql';
import { IUser } from '@console-core/types';

interface ISchemaOptions {
  user: IUser | null;
  timezones: IIoRestorecommerceTimezoneTimezone[];
  locales: IoRestorecommerceLocaleLocale[];
}

export const buildLocalizationDataSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'localeId',
        label: 'Language',
        type: 'select',
        defaultValue: options.user?.localeId,
        validators: [Validators.required],
        params: {
          options: options.locales.map((locale) => ({
            label: locale.description ?? '',
            sublabel: locale.value ?? '',
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
        defaultValue: options.user?.timezoneId,
        validators: [Validators.required],
        params: {
          options: options.timezones.map((timezone) => ({
            label: timezone.id ?? '',
            sublabel: timezone.description ?? '',
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
    ],
  };
};
