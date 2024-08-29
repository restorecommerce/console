import { Validators } from '@angular/forms';

import { conditional, VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IProduct } from '@console-core/types';

interface ISchemaOptions {
  products: IProduct[];
}

export const buildOrderItemSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'productId',
        label: 'Items',
        type: 'select',
        validators: [Validators.required],
        params: {
          placeholder: 'Select an item',
          search: true,
          options: options.products.map((product) => ({
            value: product.id,
            label: product.product.name,
          })),
        },
      },
      {
        name: 'variantId',
        label: 'Item variants',
        type: 'select',
        validators: [Validators.required],
        params: {
          placeholder: 'Select a variant',
          // search: true,
          options: (() => {
            const x = conditional(['productId'], (enabled) => !!enabled.value);
            console.log('xxx', x);
            return [{ value: 'ex', label: 'ddd' }];
          })(),
        },
        visible: conditional(['productId'], (enabled) => !!enabled.value),
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
