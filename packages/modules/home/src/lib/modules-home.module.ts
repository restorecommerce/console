import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { HomeComponent } from './components/home/home.component';
import { HomeTemplateComponent } from './components/template/home-template.component';
import { modulesHomeRoutes } from './lib.routes';

@NgModule({
  declarations: [HomeTemplateComponent, HomeComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild(modulesHomeRoutes),
  ],
})
export class ModulesHomeModule {}
