import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IProduct } from '@console-core/types';

interface ISchemaOptions {
  product?: IProduct;
}

export const buildProductVariantSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  console.log('options?.product?.product', options?.product?.product);

  return {
    type: 'form',
    fields: [
      // {
      //   name: 'price',
      //   type: 'object',
      //   fields: [

      //   ],
      // },
      {
        name: 'offerings',
        label: 'Offerings',
        type: 'select',
        // disabled: true,
        defaultValue: 'physical',
        validators: [Validators.required],
        params: {
          placeholder: 'Select offering',
          selectionMode: 'single',
          clearable: false,
          search: false,
          options: [
            {
              label: 'Physical',
              value: 'physical',
            },
            {
              label: 'Virtual',
              value: 'virtual',
            },
            {
              label: 'Service',
              value: 'service',
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
        name: 'name',
        label: 'Name',
        type: 'input',
        validators: [Validators.required],
        defaultValue: 'Blue Type',
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
        name: 'description',
        label: 'Description',
        type: 'input',
        validators: [],
        defaultValue:
          'A test decription about this type of particular variant!',
        params: {},
      },
      {
        name: 'stockLevel',
        label: 'Stock level',
        type: 'input',
        validators: [Validators.required],
        defaultValue: 99,
        params: {
          inputType: 'number',
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
        name: 'stockKeepingUnit',
        label: 'Stock keeping unit',
        type: 'input',
        validators: [],
        defaultValue: 'qwerty1012',
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
        name: 'taxIds',
        label: 'Taxes',
        type: 'select',
        defaultValue: ['germany-reduced-rate', 'germany-standard-rate'],
        validators: [Validators.required],
        params: {
          placeholder: 'Select taxes',
          selectionMode: 'multiple',
          clearable: false,
          search: false,
          options: [
            {
              label: 'Germany reduced rate',
              value: 'germany-reduced-rate',
            },
            {
              label: 'Germany standard rate',
              value: 'germany-standard-rate',
            },
            {
              label: 'Switzerland heavily reduced rate',
              value: 'switzerland-heavily-reduced-rate',
            },
            {
              label: 'Switzerland reduced rate',
              value: 'switzerland-reduced-rate',
            },
            {
              label: 'Switzerland standard rate',
              value: 'switzerland-standard-rate',
            },
            {
              label: 'Belgium heavily reduced rate',
              value: 'belgium-heavily-reduced-rate',
            },
            {
              label: 'Belgium standard rate',
              value: 'belgium-standard-rate',
            },
            {
              label: 'France standard rate',
              value: 'france-standard-rate',
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
      // Price ****
      {
        name: 'price',
        type: 'object',
        fields: [
          {
            name: 'currencyId',
            label: 'Currency',
            type: 'select',
            // disabled: true,
            defaultValue: 'USD',
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
            defaultValue: 10,
            params: {
              inputType: 'number',
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
            name: 'salePrice',
            label: 'Sale price',
            type: 'input',
            validators: [Validators.required],
            defaultValue: 10,
            params: {
              inputType: 'number',
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
            type: 'checkbox',
            defaultValue: false,
            name: 'sale',
            label: 'On sales',
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
