import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IoRestorecommerceOrderOrderState } from '@console-core/graphql';
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
        ...(options.order
          ? { defaultValue: options.order.notificationEmail }
          : {}),
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
        // disabled: true,
        // defaultValue: [IoRestorecommerceOrderOrderState.Submitted],
        ...(options.order ? { defaultValue: options.order.orderState } : {}),
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
