import { Validators } from '@angular/forms';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { IRole } from '@console-core/types';

interface ISchemaOptions {
  role?: IRole;
  assignableByRoles?: string[];
}

export const buildRoleSchema = ({
  role,
  assignableByRoles = [],
}: ISchemaOptions): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'input',
        ...(role ? { defaultValue: role.name } : {}),
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
        name: 'description',
        label: 'Description',
        type: 'input',
        ...(role ? { defaultValue: role.description } : {}),
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
        name: 'assignableByRoles',
        label: 'Assignable by roles',
        type: 'select',
        ...(role ? { defaultValue: role.assignableByRoles || [] } : {}),
        validators: [Validators.required],
        params: {
          placeholder: 'Select assignable by roles',
          selectionMode: 'multiple',
          clearable: true,
          search: false,
          options: assignableByRoles
            .map((id) => ({ label: id.replace(/-r-id/g, ' '), value: id }))
            .sort((a, b) => a.label.localeCompare(b.label)),
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
