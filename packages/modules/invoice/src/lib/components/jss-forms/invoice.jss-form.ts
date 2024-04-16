import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IInvoice } from '@console-core/types';

interface ISchemaOptions {
  invoice?: IInvoice;
}

export const buildInvoiceSchema = (
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
            name: 'invoiceId',
            label: 'Invoice ID',
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
      //   name: 'invoiceState',
      //   label: 'Invoice state',
      //   type: 'input',
      //   ...(options.invoice
      //     ? { defaultValue: IoRestorecommerceInvoiceInvoiceState.Created }
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
