import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { FulfillmentFacade } from '@console-core/state';

import { buildFulfillmentSchema } from '../jss-forms';

@Component({
  selector: 'app-module-fulfillment-create',
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
export class FulfillmentCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildFulfillmentSchema({});
  create = this.fulfillmentFacade.create;

  readonly vm$ = combineLatest({
    fulfillment: this.fulfillmentFacade.selected$,
  });

  constructor(private readonly fulfillmentFacade: FulfillmentFacade) {}
}
