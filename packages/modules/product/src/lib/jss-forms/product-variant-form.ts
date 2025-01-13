import { FormBuilder, Validators } from '@angular/forms';

import { IoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

interface ISchemaOptions {
  product?: IoRestorecommerceProductPhysicalVariant;
  templates?: IoRestorecommerceProductPhysicalVariant[];
}

export const buildProductVariantReactiveForm = (
  options: ISchemaOptions,
  fb: FormBuilder
) => {
  return fb.group({
    parentVariantId: [options.product?.parentVariantId || '', []],

    offerings: ['physical', [Validators.required]],

    name: [options?.product?.name || '', [Validators.required]],

    description: [options?.product?.description || ''],

    stockLevel: [options?.product?.stockLevel || '', [Validators.required]],

    stockKeepingUnit: [options?.product?.stockKeepingUnit || ''],

    taxIds: [options?.product?.taxIds || [], [Validators.required]],

    price: fb.group({
      currencyId: [
        options?.product?.price?.currencyId || '',
        [Validators.required],
      ],
      regularPrice: [
        options?.product?.price?.regularPrice || '',
        [Validators.required],
      ],
      salePrice: [
        options?.product?.price?.salePrice || '',
        [Validators.required],
      ],
      sale: [options?.product?.price?.sale || false],
    }),
  });
};
