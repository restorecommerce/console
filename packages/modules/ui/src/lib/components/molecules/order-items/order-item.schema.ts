import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

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
          placeholder: 'Select an items',
          search: true,
          options: options.products.map((product) => ({
            value: product.id,
            label: product.product.name,
          })),
        },
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
