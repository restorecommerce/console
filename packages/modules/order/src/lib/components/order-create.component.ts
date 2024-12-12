import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { OrderFacade } from '@console-core/state';

import { buildOrderSchema } from '../jss-forms';

@Component({
  selector: 'app-module-order-create',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-create
          [schema]="schema"
          [create]="create"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildOrderSchema({});
  create = this.orderFacade.create;

  readonly vm$ = combineLatest({
    order: this.orderFacade.selected$,
  });

  constructor(private readonly orderFacade: OrderFacade) {}
}
