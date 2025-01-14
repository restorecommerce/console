import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductPhysicalVariant,
} from '@console-core/graphql';
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

  constructor(private fb: FormBuilder) {}

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
    {
      label: 'Germany standard rate',
      value: 'germany-standard-rate',
    },
    {
      label: 'Switzerland heavily reduced rate',
      value: 'switzerland-heavily-reduced-rate',
    },
    {
      label: 'Switzerland reduced rate',
      value: 'switzerland-reduced-rate',
    },
    {
      label: 'Switzerland standard rate',
      value: 'switzerland-standard-rate',
    },
    {
      label: 'Belgium heavily reduced rate',
      value: 'belgium-heavily-reduced-rate',
    },
    {
      label: 'Belgium standard rate',
      value: 'belgium-standard-rate',
    },
    {
      label: 'France standard rate',
      value: 'france-standard-rate',
    },
  ];

  // TODO Get available currency from the store.
  currencies = [
    {
      label: 'USD',
      value: 'USD',
    },
    {
      label: 'EURO',
      value: 'EUR',
    },
  ];

  onSubmit(values: Partial<IIoRestorecommerceProductPhysicalVariant>) {
    this.submitVariant.emit(values);
  }
}
