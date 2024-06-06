import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IFulfillment } from '@console-core/types';

interface ISchemaOptions {
  fulfillment?: IFulfillment;
}

export const buildFulfillmentSchema = (
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
            name: 'fulfillmentId',
            label: 'Fulfillment ID',
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
