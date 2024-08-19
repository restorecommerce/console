import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef } from '@vcl/ng-vcl';

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
  }

  onAction(_: string) {
    // TODO
  }
}
