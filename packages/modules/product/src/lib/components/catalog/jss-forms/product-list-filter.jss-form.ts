import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ISchemaOptions } from './product.jss-form';

export const buildProductListFilterSchema = (
  options: ISchemaOptions
): VCLFormFieldSchemaRoot => {
  return {
    type: 'form',
    fields: [
      {
        name: 'categoryId',
        label: 'Category',
        type: 'select',
        // defaultValue: options?.product?.product.categoryId ?? '',
        params: {
          placeholder: 'Select category',
          selectionMode: 'single',
          clearable: false,
          search: false,
          options: (options.categories || []).map((category) => ({
            label: category.name,
            value: category.id,
          })),
        },
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
            label: 'Apply',
          },
        ],
      },
    ],
  };
};
