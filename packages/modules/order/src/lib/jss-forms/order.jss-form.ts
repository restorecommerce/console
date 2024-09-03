import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import {
  IoRestorecommerceCustomerCustomerType,
  IoRestorecommerceOrderOrderState,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

interface ISchemaOptions {
  order?: IOrder;
}

export const buildOrderSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'notificationEmail',
        label: 'Notification email',
        type: 'input',
        defaultValue: options.order?.notificationEmail,
        validators: [Validators.required, Validators.email],
        params: {},
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'email',
            message: 'This field should be a valid email address.',
          },
        ],
      },
      {
        name: 'orderState',
        label: 'Order state',
        type: 'select',
        defaultValue: options.order?.orderState,
        validators: [Validators.required],
        params: {
          placeholder: 'Select order state',
          selectionMode: 'single',
          clearable: false,
          search: false,
          options: [
            {
              label: 'Submitted',
              value: IoRestorecommerceOrderOrderState.Submitted,
            },
            {
              label: 'Pending',
              value: IoRestorecommerceOrderOrderState.Pending,
            },
            {
              label: 'Completed',
              value: IoRestorecommerceOrderOrderState.Completed,
            },
            {
              label: 'Withdrawn',
              value: IoRestorecommerceOrderOrderState.Withdrawn,
            },
            {
              label: 'Cancelled',
              value: IoRestorecommerceOrderOrderState.Cancelled,
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
        name: 'customerType',
        label: 'Customer type',
        type: 'select',
        defaultValue: options.order?.customerType,
        validators: [Validators.required],
        params: {
          placeholder: 'Select customer type',
          options: [
            {
              label: 'Private',
              value: IoRestorecommerceCustomerCustomerType.Private,
            },
            {
              label: 'Commercial',
              value: IoRestorecommerceCustomerCustomerType.Commercial,
            },
            {
              label: 'Public',
              value: IoRestorecommerceCustomerCustomerType.PublicSector,
            },
          ],
        },
      },
      {
        name: 'paymentMethodId',
        label: 'Payment method',
        type: 'select',
        defaultValue: options.order?.paymentMethodId,
        // validators: [Validators.required],
        params: {
          placeholder: 'Select payment method',
          options: [
            {
              label: 'Paypal',
              value: 'paypal',
            },
            {
              label: 'SWIFT / SEPA Bank Transfer',
              value: 'swift_sepa_bank_transfer',
            },
          ],
        },
      },
      {
        name: 'customerVatId',
        label: 'Customer VAT id',
        type: 'input',
      },
      {
        name: 'userId',
        label: 'User id',
        type: 'input',
      },
      {
        name: 'customerId',
        label: 'Customer Id',
        type: 'input',
      },
      {
        name: 'customerOrderNr',
        label: 'Customer order number',
        type: 'input',
      },
      {
        name: 'customerRemark',
        label: 'Customer remark',
        defaultValue: options.order?.customerRemark,
        type: 'input',
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
