import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { SubSink } from 'subsink';

import {
  IIoRestorecommerceProductPhysicalVariant,
  IoRestorecommerceProductPhysicalVariant,
} from '@console-core/graphql';
import { CurrencyFacade, TaxFacade } from '@console-core/state';
import { IProduct } from '@console-core/types';

import { buildProductVariantReactiveForm } from '../../jss-forms/product-variant-form';

@Component({
  selector: 'app-module-product-variant-form',
  templateUrl: './product-variant-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProductVariantFormComponent implements OnInit, OnDestroy {
  @Input() product!: IProduct;
  @Input() variant!: IIoRestorecommerceProductPhysicalVariant;

  @Output() submitVariant = new EventEmitter<
    Partial<IIoRestorecommerceProductPhysicalVariant>
  >();

  private readonly subscriptions = new SubSink();

  templates: IoRestorecommerceProductPhysicalVariant[] = [];
  productVariantForm!: FormGroup;

  currencies$ = this.currencyFacade.all$.pipe(
    map((currencies) =>
      currencies.map((currency) => ({
        label: currency.name,
        value: currency.id,
      }))
    )
  );

  taxes$ = this.taxFacade.all$.pipe(
    map((taxes) =>
      taxes.map((tax) => ({ label: tax.id, value: tax.name ?? tax.id }))
    )
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly taxFacade: TaxFacade,
    private readonly currencyFacade: CurrencyFacade
  ) {}

  ngOnInit(): void {
    this.templates = this.product?.product?.physical?.templates || [];

    this.productVariantForm = buildProductVariantReactiveForm(
      {
        product: this.variant,
      },
      this.fb
    );

    this.subscriptions.add(
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
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onSubmit(values: Partial<IIoRestorecommerceProductPhysicalVariant>) {
    this.submitVariant.emit({ ...values, id: this.variant?.id });
  }
}
