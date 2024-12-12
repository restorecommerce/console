import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { ModeType } from '@console-core/graphql';
import {
  OrderFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IOrder } from '@console-core/types';
import { JSONEditorComponent } from '@console-modules/ui';

import { buildOrderSchema } from '../jss-forms';
import { transformOrderToInput } from '../utils';

@Component({
  selector: 'app-module-order-edit',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="mt-2 flex col">
        <!-- <rc-crud-edit
          [id]="vm.id"
          [schema]="schema"
          [update]="update"
        /> -->
        <div class="col flex">
          <rc-json-editor
            #jsonEditor
            [value]="getOrderSource(vm.order)"
            class="flex"
          />

          <div class="py-2 row justify-content-end">
            <div class="loose-button-group">
              <button class="button transparent">Cancel</button>
              <button
                class="button"
                (click)="onSave()"
                [disabled]="jsonError"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class OrderEditComponent {
  @HostBinding('class') classNames = 'col w-100p h-100p';

  schema!: VCLFormFieldSchemaRoot;
  update = this.orderFacade.update;

  orderJSON = '';
  modified = false;
  jsonError = false;

  @ViewChild('rawTextarea')
  rawTextarea!: ElementRef;

  @ViewChild('jsonEditor')
  jsonEditor!: JSONEditorComponent;

  readonly vm$ = combineLatest({
    id: this.routerFacade.params$.pipe(
      map(({ id }) => id),
      tap((id) => {
        this.orderFacade.setSelectedId(id);
      })
    ),
    order: this.orderFacade.selected$.pipe(
      tap((order) => {
        if (!order) {
          this.orderFacade.setSelectedId(null);
          this.router.navigate(
            ROUTER.pages.main.children.orders.children.index.getLink()
          );
        }
      }),
      filterEmptyAndNullishAndUndefined(),
      tap((order) => {
        this.schema = buildOrderSchema({ order });
      })
    ),
  });

  getOrderSource(order: IOrder): string {
    const orderInput = transformOrderToInput(order);
    console.log('sHOW ANYTHIME WE HOVER...');
    // The above log always shows up whenever we hover on the cancel and save button.
    // Investigate this by first removing the vcl-button directive to see if this is the
    // issue.
    return JSON.stringify(orderInput, null, 4);
  }

  constructor(
    private readonly router: Router,
    private readonly routerFacade: RouterFacade,
    private readonly orderFacade: OrderFacade
  ) {}

  onSave() {
    this.update({
      items: [
        {
          ...JSON.parse(this.jsonEditor.getValue()),
        },
      ],
      mode: ModeType.Update,
    });
  }
}
