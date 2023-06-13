import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeTemplateComponent } from './components/home-template.component';
import { modulesHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modulesHomeRoutes),
    RouterModule.forChild(modulesHomeRoutes),
  ],
  declarations: [HomeTemplateComponent, HomeComponent],
})
export class ModulesHomeModule {}
