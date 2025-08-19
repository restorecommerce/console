import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  ICountry,
  IManufacturer,
  IProduct,
  IProductCategory,
  IProductPrototype,
  ITax,
} from '@console-core/types';

export interface ISchemaOptions {
  product?: IProduct;
  manufacturers?: IManufacturer[];
  countries?: ICountry[];
  prototypes?: IProductPrototype[];
  categories?: IProductCategory[];
  taxes?: ITax[];
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
              options: (options.manufacturers || []).map((manufacturer) => ({
                label: manufacturer.name,
                value: manufacturer.id,
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
              options: (options.countries || []).map((country) => ({
                label: country.name,
                value: country.id,
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
              options: (options.prototypes || []).map((prototype) => ({
                label: prototype.name,
                value: prototype.id,
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
              options: (options.categories || []).map((category) => ({
                label: category.name,
                value: category.id,
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
              options: (options.taxes || []).map((tax) => ({
                label: `${tax.id} ${tax.rate}`,
                value: tax.id,
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
