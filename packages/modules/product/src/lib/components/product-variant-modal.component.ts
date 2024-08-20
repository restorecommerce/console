import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { ComponentLayerRef, JssFormComponent } from '@vcl/ng-vcl';

import { IoRestorecommerceProductPhysicalVariant } from '@console-core/graphql';

import { buildProductVariantSchema } from '../jss-forms';

@Component({
  selector: 'app-module-product-variant-modal',
  template: ` <vcl-panel-dialog
    [showCloseButton]="true"
    (close)="close()"
  >
    <vcl-panel-title>{{ title }}</vcl-panel-title>

    <vcl-jss-form
      autocomplete="off"
      #variantModalForm="vclJssForm"
      [schema]="schema"
      (formSubmit)="onSubmit()"
      (formAction)="onAction($event)"
    >
    </vcl-jss-form>
  </vcl-panel-dialog>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVariantEditComponent {
  constructor(private layer: ComponentLayerRef) {}

  @ViewChild('variantModalForm')
  variantModalForm!: JssFormComponent;

  schema = buildProductVariantSchema({});

  get title() {
    return this.layer.data.title;
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }

  onSubmit() {
    // TODO
    console.log();
    const value = this.variantModalForm.form
      .value as IoRestorecommerceProductPhysicalVariant;

    console.log('value', value);

    // Massage the value to the parent product
  }

  onAction(_: string) {
    // TODO
  }
}
