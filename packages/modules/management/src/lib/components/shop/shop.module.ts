import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { ShopIndexComponent } from './shop-index.component';
import { ShopTemplateComponent } from './template/shop-template.component';

const routes: Routes = [
  {
    path: '',
    component: ShopTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.shops.children
          .index.path,
        component: ShopIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.shops.children.index
            .title,
      },

      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.shops.children.index
            .path,
      },
    ],
  },
];

@NgModule({
  declarations: [ShopIndexComponent],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class ShopModule {}
