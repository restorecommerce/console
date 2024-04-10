import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import {
  FulfillmentFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';

import { buildFulfillmentSchema } from './jss-forms';

@Component({
  selector: 'app-module-fulfillment-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2">
        <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        />
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FulfillmentEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.fulfillmentFacade.update;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.fulfillmentFacade.setSelectedId(id);
      })
    ),
    fulfillment: this.fulfillmentFacade.selected$.pipe(
      tap((fulfillment) => {
        if (!fulfillment) {
          this.fulfillmentFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.fulfillments.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((fulfillment) => {
        this.schema = buildFulfillmentSchema({ fulfillment });
      })
    ),
  });

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly fulfillmentFacade: FulfillmentFacade
  ) {}
}
