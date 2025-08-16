import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductPrototypeFacade } from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildProductPrototypeSchema } from './jss-forms';

@Component({
  selector: 'app-module-prototype-create',
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
export class PrototypeCreateComponent {
  shema = buildProductPrototypeSchema({});
  create = this.productPrototypeFacade.create;

  constructor(private productPrototypeFacade: ProductPrototypeFacade) {}
}
