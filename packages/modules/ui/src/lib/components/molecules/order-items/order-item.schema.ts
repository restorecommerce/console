import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IOrder } from '@console-core/types';

interface ISchemaOptions {
  order?: IOrder;
}

export const buildOrderItemSchema = (
  _: ISchemaOptions
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
          options: [
            {
              label: 'Item 1',
              value: 'item #1',
            },
            {
              label: 'Item 2',
              value: 'item #2',
            },
            {
              label: 'Item 3',
              value: 'item #3',
            },
          ],
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
