import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IManufacturer } from '@console-core/types';

interface ISchemaOptions {
  manufacturer?: IManufacturer;
}

export const buildManufacturerSchema = (
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
        defaultValue: options?.manufacturer?.name || '',
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
        defaultValue: options?.manufacturer?.description || '',
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
