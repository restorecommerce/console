// import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ProductCategoryFacade } from '@console-core/state';
import { ModulesUiModule } from '@console-modules/ui';

import { buildProductCategorySchema } from './jss-forms';

@Component({
  selector: 'app-module-category-create',
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
export class CategoryCreateComponent {
  shema = buildProductCategorySchema({});
  create = this.productCategoryFacade.create;

  constructor(private productCategoryFacade: ProductCategoryFacade) {}
}
