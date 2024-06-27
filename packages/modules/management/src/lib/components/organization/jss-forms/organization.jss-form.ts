import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IOrganization } from '@console-core/types';

interface ISchemaOptions {
  organization?: IOrganization;
}

export const buildOrganizationSchema = ({
  organization,
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  return {
    type: 'form',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'input',
        ...(organization ? { defaultValue: organization.name } : {}),
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
        name: 'email',
        label: 'Email',
        type: 'input',
        ...(organization ? { defaultValue: organization.email } : {}),
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
        name: 'website',
        label: 'Website',
        type: 'input',
        ...(organization ? { defaultValue: organization.website } : {}),
        validators: [Validators.required, Validators.pattern(urlRegex)],
        params: {},
        hints: [
          {
            type: 'error',
            error: 'required',
            message: 'This field is required.',
          },
          {
            type: 'error',
            error: 'pattern',
            message: 'This field should be a valid URL.',
          },
        ],
      },
      {
        name: 'vatId',
        label: 'VAT identification number',
        type: 'input',
        ...(organization ? { defaultValue: organization.vatId } : {}),
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
