import { Validators } from '@angular/forms';

import { VCLFormFieldControlSchema, VCLFormFieldSchemas } from '@vcl/ng-vcl';

export const buildProductPriceFields: VCLFormFieldSchemas<VCLFormFieldControlSchema>[] =
  [
    {
      name: 'currencyId',
      label: 'Currency',
      type: 'select',
      // disabled: true,
      defaultValue: '',
      validators: [Validators.required],
      params: {
        placeholder: 'Select currency',
        selectionMode: 'single',
        clearable: false,
        search: false,
        options: [
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'EURO',
            value: 'EUR',
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
    {
      name: 'regularPrice',
      label: 'Regular price',
      type: 'input',
      validators: [Validators.required],
      defaultValue: '',
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
      name: 'salePrice',
      label: 'Sale price',
      type: 'input',
      validators: [Validators.required],
      defaultValue: '',
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
      type: 'checkbox',
      name: 'sales',
      label: 'On sales',
    },
  ];
