import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { EAddressType, IOrder } from '@console-core/types';

interface ISchemaOptions {
  addressType: EAddressType;
  order: IOrder;
}

export const buildOrderAddressSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  const addressWrapper = options.order[options.addressType];

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
                validators: [Validators.required],
                defaultValue: addressWrapper?.address?.buildingNumber || '',
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
                validators: [Validators.required],
                defaultValue: addressWrapper?.address?.street || '',
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
                validators: [Validators.required],
                defaultValue: addressWrapper?.address?.locality || '',
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
                validators: [Validators.required],
                defaultValue: addressWrapper?.address?.region || '',
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
                validators: [Validators.required],
                defaultValue: addressWrapper?.address?.postcode || '',
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
                defaultValue: addressWrapper?.address?.countryId || '',
                validators: [Validators.required],
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
              // {
              //   name: 'packStation',
              //   type: 'object',
              //   fields: [
              //     {
              //       name: 'provider',
              //       label: 'Provider',
              //       type: 'input',
              //       defaultValue:
              //         addressWrapper?.address?.packStation?.provider || '',
              //       params: {},
              //       hints: [
              //         {
              //           type: 'error',
              //           error: 'required',
              //           message: 'This field is required.',
              //         },
              //       ],
              //     },
              //     {
              //       name: 'stationNumber',
              //       label: 'Station number',
              //       type: 'input',
              //       defaultValue:
              //         addressWrapper?.address?.packStation?.stationNumber || '',
              //       params: {},
              //       hints: [
              //         {
              //           type: 'error',
              //           error: 'required',
              //           message: 'This field is required.',
              //         },
              //       ],
              //     },
              //     {
              //       name: 'postNumber',
              //       label: 'Post number',
              //       type: 'input',
              //       defaultValue:
              //         addressWrapper?.address?.packStation?.postNumber || '',
              //       params: {},
              //       hints: [
              //         {
              //           type: 'error',
              //           error: 'required',
              //           message: 'This field is required.',
              //         },
              //       ],
              //     },
              //   ],
              // },
            ],
          },
          {
            name: 'contact',
            type: 'object',
            fields: [
              {
                name: 'name',
                label: 'Name',
                type: 'input',
                defaultValue: addressWrapper?.contact?.name || '',
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
                defaultValue: addressWrapper?.contact?.email || '',
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
                name: 'phone',
                label: 'Phone number',
                type: 'input',
                defaultValue: addressWrapper?.contact?.phone || '',
                params: {},
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
          {
            name: 'comments',
            label: 'Comment',
            type: 'textarea',
            defaultValue: addressWrapper?.comments || '',
            params: {},
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
