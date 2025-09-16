import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  EInvoicePaymentState,
  IInvoice,
  IShop,
  IUser,
} from '@console-core/types';

interface ISchemaOptions {
  invoice?: IInvoice;
  users?: IUser[];
  shops?: IShop[];
  customers?: any[];
}

export const buildInvoiceSchema = (
  options: ISchemaOptions
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
            defaultValue: options.invoice?.fromDate,
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
            defaultValue: options.invoice?.toDate,
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
            defaultValue:
              options.invoice?.paymentState || EInvoicePaymentState.Unpayed,
            validators: [Validators.required],
            params: {
              options: [
                {
                  value: EInvoicePaymentState.Unpayed,
                  label: EInvoicePaymentState.Unpayed,
                },
                {
                  value: EInvoicePaymentState.Payed,
                  label: EInvoicePaymentState.Payed,
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
            name: 'customerOrderNumber',
            label: 'Order number',
            defaultValue: options.invoice?.customerOrderNumber,
            type: 'input',
          },
          {
            name: 'customerId',
            label: 'Customer',
            type: 'select',
            defaultValue: options.invoice?.customerId,
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
            defaultValue: options.invoice?.customerVatId,
            validators: [],
            params: {},
          },
          {
            name: 'userId',
            label: 'User',
            type: 'select',
            defaultValue: options.invoice?.userId,
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
            defaultValue: options.invoice?.shopId,
            params: {
              options: [],
              search: true,
            },
          },
          {
            name: 'withdrawn',
            label: 'Withdrawn',
            type: 'checkbox',
            defaultValue: options.invoice?.withdrawn,
          },
          {
            name: 'sent',
            label: 'Sent',
            type: 'checkbox',
            defaultValue: options.invoice?.sent,
          },
          {
            name: 'paymentHints',
            label: 'Payment hints',
            type: 'token',
            defaultValue: options.invoice?.paymentHints,
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
