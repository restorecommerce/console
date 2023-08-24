import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  IIoRestorecommerceTimezoneTimezone,
  IoRestorecommerceLocaleLocale,
} from '@console-core/graphql';

interface ISchemaOptions {
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
        params: {
          options: options.locales.map((locale) => ({
            label: locale.description ?? '',
            sublabel: locale.value ?? '',
            value: locale.id,
          })),
        },
      },
      {
        name: 'timezoneId',
        label: 'Timezone',
        type: 'select',
        params: {
          options: options.timezones.map((timezone) => ({
            label: timezone.id ?? '',
            sublabel: timezone.description ?? '',
            value: timezone.id,
          })),
        },
      },
    ],
  };
};
