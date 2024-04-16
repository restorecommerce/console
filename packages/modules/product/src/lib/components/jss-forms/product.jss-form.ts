import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IProduct } from '@console-core/types';

interface ISchemaOptions {
  product?: IProduct;
}

export const buildProductSchema = (
  _: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        type: 'object',
        name: 'items',
        label: 'Items',
        fields: [
          {
            name: 'productId',
            label: 'Product ID',
            type: 'input',
            validators: [Validators.required],
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
      // {
      //   name: 'productState',
      //   label: 'Product state',
      //   type: 'input',
      //   ...(options.product
      //     ? { defaultValue: IoRestorecommerceProductProductState.Created }
      //     : {}),
      //   validators: [Validators.required],
      //   params: {},
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
