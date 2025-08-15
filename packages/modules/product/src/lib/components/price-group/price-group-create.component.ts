// import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PriceGroupFacade } from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildPriceGroupSchema } from './jss-forms';

@Component({
  selector: 'app-module-price-group-create',
  template: `
    <div class="mt-2">
      <rc-crud-create
        [schema]="shema"
        [create]="create"
      />
    </div>
  `,
  imports: [ModulesUiModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceGroupCreateComponent {
  shema = buildPriceGroupSchema({});
  create = this.priceGroupFacade.create;

  constructor(private priceGroupFacade: PriceGroupFacade) {}
}
