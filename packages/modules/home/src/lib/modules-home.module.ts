import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { HomeComponent } from './components/home/home.component';
import { HomeTemplateComponent } from './components/template/home-template.component';
import { modulesHomeRoutes } from './lib.routes';

@NgModule({
  declarations: [HomeTemplateComponent, HomeComponent],
  imports: [ModulesSharedModule, RouterModule.forChild(modulesHomeRoutes)],
})
export class ModulesHomeModule {}
