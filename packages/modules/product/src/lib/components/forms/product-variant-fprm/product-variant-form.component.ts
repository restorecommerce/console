import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductPhysicalVariant,
} from '@console-core/graphql';
import { TaxFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

import { buildProductVariantReactiveForm } from '../../../jss-forms/product-variant-form';

@Component({
  selector: 'app-module-product-variant-form',
  templateUrl: './product-variant-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductVariantFormComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() variant!: IIoRestorecommerceProductPhysicalVariant;

  @Output() submitVariant = new EventEmitter<
    Partial<IIoRestorecommerceProductPhysicalVariant>
  >();

  templates: IoRestorecommerceProductPhysicalVariant[] = [];
  productVariantForm!: FormGroup;

  taxes$ = this.taxFacade.all$.pipe(
    map((taxes) =>
      taxes.map((tax) => ({ label: tax.id, value: tax.name ?? tax.id }))
    )
  );

  constructor(private fb: FormBuilder, private taxFacade: TaxFacade) {}

  ngOnInit(): void {
    this.templates = this.product?.product?.physical?.templates || [];

    this.productVariantForm = buildProductVariantReactiveForm(
      {
        product: this.variant,
      },
      this.fb
    );

    this.productVariantForm
      .get('parentVariantId')
      ?.valueChanges.subscribe((value) => {
        const templates = this.product.product.physical
          ?.templates as IoRestorecommerceProductPhysicalVariant[];

        const template = templates.find((tmp) => tmp.id === value);

        if (!this.variant) {
          this.productVariantForm.patchValue({
            name: template?.name,
            description: template?.description,
            stockLevel: template?.stockLevel,
            stockKeepingUnit: template?.stockKeepingUnit,
            taxIds: template?.taxIds,
            price: {
              currencyId: template?.price?.currencyId,
              regularPrice: template?.price?.regularPrice,
              salePrice: template?.price?.salePrice,
              sale: template?.price?.sale,
            },
          });
        }
      });
  }

  // TODO Get available taxes from the store.
  taxes = [
    {
      label: 'Germany reduced rate',
      value: 'germany-reduced-rate',
    },
  ];

  // TODO Get available currency from the store.
  currencies = [
    {
      label: 'USD',
      value: 'USD',
    },
  ];

  onSubmit(values: Partial<IIoRestorecommerceProductPhysicalVariant>) {
    this.submitVariant.emit(values);
  }
}
