import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ComponentLayerRef } from '@vcl/ng-vcl';

@Component({
  selector: 'rc-order-item-form',
  template: `
    <vcl-panel-dialog
      [showCloseButton]="true"
      (close)="close()"
    >
      <vcl-panel-title>Add item</vcl-panel-title>
      <vcl-jss-form
        autocomplete="off"
        ngDefaultControl
        #createForm="vclJssForm"
        [schema]="schema"
        (formAction)="onAction($event)"
        (formSubmit)="onSubmit()"
      />
    </vcl-panel-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcOrderItemFormComponent {
  constructor(private layer: ComponentLayerRef) {}

  get schema() {
    return this.layer.data.schema;
  }

  onAction(_: string): void {
    // TODO
  }

  onSubmit(): void {
    // TODO
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
