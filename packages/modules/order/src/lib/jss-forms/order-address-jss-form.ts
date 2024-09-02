// import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { EAddressType } from '@console-core/types';

interface ISchemaOptions {
  addressType: EAddressType;
}

export const buildOrderAddressSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: options.addressType,
        type: 'object',
        fields: [
          {
            name: 'address',
            type: 'object',
            fields: [
              {
                name: 'buildingNumber',
                label: 'Building number',
                type: 'input',
                // validators: [Validators.required],
                defaultValue: '4',
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
                name: 'street',
                label: 'Street',
                type: 'input',
                // validators: [Validators.required],
                defaultValue: 'Ossietzkystraße',
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
                name: 'locality',
                label: 'Locality',
                type: 'input',
                // validators: [Validators.required],
                defaultValue: 'Stuttgart',
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
                name: 'region',
                label: 'Region',
                type: 'input',
                // validators: [Validators.required],
                defaultValue: 'Stuttgart',
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
                name: 'postcode',
                label: 'Postcode',
                type: 'input',
                // validators: [Validators.required],
                defaultValue: '70174',
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
                name: 'countryId',
                label: 'Country',
                type: 'select',
                defaultValue: 'germany',
                // validators: [Validators.required],
                params: {
                  placeholder: 'Country',
                  options: [
                    {
                      label: 'Germany',
                      value: 'germany',
                    },
                    {
                      label: 'Switzerland',
                      value: 'switzerland',
                    },
                    {
                      label: 'France',
                      value: 'france',
                    },
                  ],
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
