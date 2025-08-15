import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IPriceGroup } from '@console-core/types';

interface ISchemaOptions {
  priceGroup?: IPriceGroup;
}

export const buildPriceGroupSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'input',
        validators: [Validators.required],
        defaultValue: options?.priceGroup?.name || '',
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
        name: 'description',
        label: 'Description',
        type: 'input',
        validators: [Validators.required],
        defaultValue: options?.priceGroup?.description || '',
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
