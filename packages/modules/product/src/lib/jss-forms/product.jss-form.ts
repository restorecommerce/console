import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IProduct } from '@console-core/types';

interface ISchemaOptions {
  product?: IProduct;
}

export const buildProductSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'product',
        type: 'object',
        fields: [
          {
            name: 'name',
            label: 'Name',
            type: 'input',
            validators: [Validators.required],
            defaultValue: options?.product?.product.name || '',
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
            validators: [Validators.required],
            defaultValue: options?.product?.product.description || '',
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
            name: 'manufacturerId',
            label: 'Manufacturer',
            type: 'select',
            // disabled: true,
            validators: [Validators.required],
            defaultValue: options?.product?.product.manufacturerId ?? '',
            params: {
              placeholder: 'Select manufacturer',
              selectionMode: 'single',
              clearable: false,
              search: false,
              options: [
                {
                  label: 'Manufacturer A',
                  value: 'manu-a',
                },
                {
                  label: 'Manufacturer B',
                  value: 'manu-b',
                },
                {
                  label: 'Manufacturer C',
                  value: 'manu-c',
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
            name: 'originCountryId',
            label: 'Origin country',
            type: 'select',
            // disabled: true,
            validators: [Validators.required],
            defaultValue: options?.product?.product.originCountryId ?? '',
            params: {
              placeholder: 'Select origin country',
              selectionMode: 'single',
              clearable: false,
              search: false,
              options: [
                {
                  label: 'German',
                  value: 'germany',
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
          {
            name: 'prototypeId',
            label: 'Prototype',
            type: 'select',
            // disabled: true,
            validators: [Validators.required],
            defaultValue: options?.product?.product.prototypeId ?? '',
            params: {
              placeholder: 'Select prototype',
              selectionMode: 'single',
              clearable: false,
              search: false,
              options: [
                {
                  label: 'Prototype A',
                  value: 'proto-a',
                },
                {
                  label: 'Prototype B',
                  value: 'proto-b',
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
            name: 'categoryId',
            label: 'Category',
            type: 'select',
            // disabled: true,
            validators: [Validators.required],
            defaultValue: options?.product?.product.categoryId ?? '',
            params: {
              placeholder: 'Select category',
              selectionMode: 'single',
              clearable: false,
              search: false,
              options: [
                {
                  label: 'Category A',
                  value: 'cat-a',
                },
                {
                  label: 'Category B',
                  value: 'cat-b',
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
            name: 'taxIds',
            label: 'Taxes',
            type: 'select',
            // disabled: true,
            defaultValue: options?.product?.product.taxIds ?? [],
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
          {
            name: 'gtin',
            label: 'Global trade item number',
            type: 'input',
            validators: [Validators.required],
            defaultValue: options?.product?.product.gtin ?? '',
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
