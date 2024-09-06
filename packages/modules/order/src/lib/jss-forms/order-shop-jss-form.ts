// import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IOrder } from '@console-core/types';

interface ISchemaOptions {
  order: IOrder;
}

export const buildOrderShopSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'shopId',
        label: 'Select shop',
        type: 'input',
        defaultValue: options.order.shopId || '',
        disabled: true,
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
        ],
      },
      // {
      //   name: 'shopId',
      //   label: 'Order state',
      //   type: 'select',
      //   defaultValue: options.order?.orderState,
      //   validators: [Validators.required],
      //   params: {
      //     placeholder: 'Select order state',
      //     selectionMode: 'single',
      //     clearable: false,
      //     search: false,
      //     options: [
      //       {
      //         label: '',
      //         value: '',
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
            action: 'cancel',
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
