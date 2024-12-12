import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';

import { VCLFormFieldSchemaRoot } from '@vcl/ng-vcl';

import { ProductFacade } from '@console-core/state';

import { buildProductSchema } from '../jss-forms';

@Component({
  selector: 'app-module-product-create',
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
export class ProductCreateComponent {
  schema: VCLFormFieldSchemaRoot = buildProductSchema({});
  create = this.productFacade.create;

  readonly vm$ = combineLatest({
    product: this.productFacade.selected$,
  });

  constructor(private readonly productFacade: ProductFacade) {}
}
