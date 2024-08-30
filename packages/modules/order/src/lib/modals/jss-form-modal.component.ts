import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import {
  ComponentLayerRef,
  JssFormComponent,
  VCLFormFieldSchemaRoot,
} from '@vcl/ng-vcl';

import { IIoRestorecommerceOrderOrder, ModeType } from '@console-core/graphql';
import { OrderFacade } from '@console-core/state';
import { IOrder } from '@console-core/types';

import { transformOrderToInput } from '../utils';

// import { transformOrderToInput } from '../../utils';

@Component({
  selector: 'app-order-item-form',
  template: `
    <vcl-panel-dialog
      [showCloseButton]="true"
      (close)="close()"
    >
      <vcl-panel-title>{{ title }}</vcl-panel-title>

      <vcl-jss-form
        autocomplete="off"
        #form="vclJssForm"
        [schema]="schema"
        (formSubmit)="onSubmit()"
        (formAction)="onAction($event)"
      >
      </vcl-jss-form>
    </vcl-panel-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JSSFormModalComponent {
  @ViewChild('form')
  form!: JssFormComponent;

  constructor(
    private layer: ComponentLayerRef,
    private readonly orderFacade: OrderFacade
  ) {}

  get title(): string {
    return this.layer.data.title;
  }

  get order(): IOrder {
    return this.layer.data.order;
  }

  get schema(): VCLFormFieldSchemaRoot {
    return this.layer.data.schema;
  }

  onSubmit(): void {
    if (this.form.form.valid) {
      const currentOrderInput = transformOrderToInput(this.order);
      const updatedOrderInput: IIoRestorecommerceOrderOrder = {
        ...currentOrderInput,
        shippingAddress: {
          address: {
            ...this.form.form.value,
          },
        },
      };

      this.orderFacade.update({
        items: [updatedOrderInput],
        mode: ModeType.Update,
      });
    }
  }

  onAction(_: string): void {
    // TODO
  }

  close(value?: string) {
    this.layer.close({
      value,
    });
  }
}
