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
            name: 'from',
            label: 'From',
            type: 'date-picker',
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
          {
            name: 'to',
            label: 'To',
            type: 'date-picker',
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
          {
            name: 'paymentState',
            label: 'Payment state',
            type: 'select',
            validators: [Validators.required],
            params: {
              options: [],
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
            name: 'customerOrderNumber',
            label: 'Order number',
            type: 'input',
          },
          {
            name: 'customerId',
            label: 'Customer',
            type: 'select',
            validators: [Validators.required],
            params: {
              options: [],
              search: true,
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
            name: 'customerVatId',
            label: 'Vat ID',
            type: 'input',
            validators: [],
            params: {},
          },
          {
            name: 'userId',
            label: 'User',
            type: 'select',
            validators: [Validators.required],
            params: {
              options: [],
              search: true,
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
            name: 'shopId',
            label: 'Shop',
            type: 'select',
            params: {
              options: [],
              search: true,
            },
          },
          {
            name: 'withdrawn',
            label: 'Withdrawn',
            type: 'checkbox',
          },
          {
            name: 'sent',
            label: 'Sent',
            type: 'checkbox',
          },
          {
            name: 'paymentHints',
            label: 'Payment hints',
            type: 'token',
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
