import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

// import { IProduct } from '@console-core/types';
import { IoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

interface ISchemaOptions {
  product?: IoRestorecommerceProductPhysicalVariant;
  templates?: IoRestorecommerceProductPhysicalVariant[];
}

export const buildProductVariantSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'template',
        label: 'Base template',
        type: 'select',
        // disabled: true,
        defaultValue: '',
        validators: [],
        params: {
          placeholder: 'Select base template',
          selectionMode: 'single',
          clearable: false,
          search: false,
          options: [
            ...(options.templates || []).map((template) => ({
              label: template.name || template.id || '',
              value: template.id,
            })),
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
        defaultValue: options?.product?.name || '',
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
        defaultValue: options?.product?.description || '',
        params: {},
      },
      {
        name: 'stockLevel',
        label: 'Stock level',
        type: 'input',
        validators: [Validators.required],
        defaultValue: options?.product?.stockLevel || '',
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
        defaultValue: options?.product?.stockKeepingUnit || '',
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
        defaultValue: options?.product?.taxIds || [],
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
            defaultValue: options?.product?.price?.currencyId || '',
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
            defaultValue: options?.product?.price?.regularPrice || '',
            params: {
              inputType: 'number',
            },
            hints: [
              {
                type: 'error',
                error: 'required',
                message: 'This field is required.',
              },
              {
                type: 'error',
                error: 'min',
                message: '',
              },
            ],
          },
          {
            name: 'salePrice',
            label: 'Sale price',
            type: 'input',
            validators: [Validators.required],
            defaultValue: options?.product?.price?.salePrice || '',
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
            defaultValue: options?.product?.price?.sale || false,
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
