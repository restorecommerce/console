import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: ROUTER.pages.main.children.products.children.index.path,
    component: ProductComponent,
    title: ROUTER.pages.main.children.products.title,
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class ProductModule {}
