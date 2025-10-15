import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ROUTER } from '@console-core/config';
import { ModeType } from '@console-core/graphql';
import { fulfilmentToInputDTO } from '@console-core/mappers';
import {
  FulfillmentFacade,
  RouterFacade,
  filterEmptyAndNullishAndUndefined,
} from '@console-core/state';
import { IFulfillment } from '@console-core/types';
import { omitNullishAndEmpty } from '@console-modules/shared';
import { JSONEditorComponent } from '@console-modules/ui';

import { buildFulfillmentSchema } from '../jss-forms';

@Component({
  selector: 'app-module-fulfillment-edit',
  template: `
    @if(vm$ | async; as vm) {
    <div class="mt-2 flex col">
      <div class="col flex">
        <rc-json-editor
          #jsonEditor
          [value]="getFulfillmentSource(vm.fulfillment)"
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
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FulfillmentEditComponent {
  schema!: VCLFormFieldSchemaRoot;
  update = this.fulfillmentFacade.update;

  jsonError = false;

  @HostBinding('class') classNames = 'col w-100p h-100p';

  @ViewChild('jsonEditor')
  jsonEditor!: JSONEditorComponent;

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

  getFulfillmentSource(fulfillment: IFulfillment): string {
    const fulfillemntInput = fulfilmentToInputDTO(fulfillment);
    return JSON.stringify(fulfillemntInput, null, 4);
  }

  onSave() {
    this.update({
      items: [
        {
          ...omitNullishAndEmpty(JSON.parse(this.jsonEditor.getValue())),
        },
      ],
      mode: ModeType.Update,
    });
  }
}
