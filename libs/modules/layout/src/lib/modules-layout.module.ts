import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { modulesLayoutRoutes } from './lib.routes';
import { LayoutTemplateComponent } from './template/layout-template.component';

@NgModule({
  declarations: [LayoutTemplateComponent, IndexComponent],
  imports: [CommonModule, RouterModule.forChild(modulesLayoutRoutes)],
})
export class ModulesLayoutModule {}
