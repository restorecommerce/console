// import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

interface ISchemaOptions {
  item1?: string; // Optional data that can be anything.
}

export const buildOrderAddressSchema = (
  _: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
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
      // Object references ****
      // {
      //   name: 'price',
      //   type: 'object',
      //   fields: [
      //     {
      //       name: 'currencyId',
      //       label: 'Currency',
      //       type: 'select',
      //       // disabled: true,
      //       defaultValue: options?.product?.price?.currencyId || '',
      //       validators: [Validators.required],
      //       params: {
      //         placeholder: 'Select currency',
      //         selectionMode: 'single',
      //         clearable: false,
      //         search: false,
      //         options: [
      //           {
      //             label: 'USD',
      //             value: 'USD',
      //           },
      //           {
      //             label: 'EURO',
      //             value: 'EUR',
      //           },
      //         ],
      //       },
      //       hints: [
      //         {
      //           type: 'error',
      //           error: 'required',
      //           message: 'This field is required.',
      //         },
      //       ],
      //     },
      //     {
      //       name: 'regularPrice',
      //       label: 'Regular price',
      //       type: 'input',
      //       validators: [Validators.required],
      //       defaultValue: options?.product?.price?.regularPrice || '',
      //       params: {
      //         inputType: 'number',
      //       },
      //       hints: [
      //         {
      //           type: 'error',
      //           error: 'required',
      //           message: 'This field is required.',
      //         },
      //         {
      //           type: 'error',
      //           error: 'min',
      //           message: '',
      //         },
      //       ],
      //     },
      //     {
      //       name: 'salePrice',
      //       label: 'Sale price',
      //       type: 'input',
      //       validators: [Validators.required],
      //       defaultValue: options?.product?.price?.salePrice || '',
      //       params: {
      //         inputType: 'number',
      //       },
      //       hints: [
      //         {
      //           type: 'error',
      //           error: 'required',
      //           message: 'This field is required.',
      //         },
      //       ],
      //     },
      //     {
      //       type: 'checkbox',
      //       defaultValue: options?.product?.price?.sale || false,
      //       name: 'sale',
      //       label: 'On sales',
      //     },
      //   ],
      // },
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
