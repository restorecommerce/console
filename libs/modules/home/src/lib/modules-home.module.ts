import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console/modules/shared';

import { IndexComponent } from './index/index.component';
import { modulesHomeRoutes } from './lib.routes';
import { HomeTemplateComponent } from './template/home-template.component';

@NgModule({
  declarations: [HomeTemplateComponent, IndexComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesHomeRoutes)],
})
export class ModulesHomeModule {}
