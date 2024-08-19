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
      //   name: 'product',
      //   type: 'object',
      //   fields: [

      //   ],
      // },

      {
        name: 'name',
        label: 'Name',
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
        name: 'description',
        label: 'Description',
        type: 'input',
        validators: [],
        defaultValue: '',
        params: {},
      },
      {
        name: 'stockLevel',
        label: 'Stock level',
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
        name: 'stockKeepingUnit',
        label: 'Stock keeping unit',
        type: 'input',
        validators: [],
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
        name: 'taxIds',
        label: 'Taxes',
        type: 'select',
        // disabled: true,
        defaultValue: options?.product?.product.taxIds || [],
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
      // {
      //   name: 'offerings',
      //   label: 'Offerings',
      //   type: 'select',
      //   // disabled: true,
      //   defaultValue: '',
      //   validators: [Validators.required],
      //   params: {
      //     placeholder: 'Select offering',
      //     selectionMode: 'single',
      //     clearable: false,
      //     search: false,
      //     options: [
      //       {
      //         label: 'Physical',
      //         value: 'physical',
      //       },
      //       {
      //         label: 'Virtual',
      //         value: 'virtual',
      //       },
      //       {
      //         label: 'Service',
      //         value: 'service'
      //       }
      //     ],
      //   },
      //   hints: [
      //     {
      //       type: 'error',
      //       error: 'required',
      //       message: 'This field is required.',
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
