import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTemplateComponent } from './components/profile-template.component';
import { SettingsComponent } from './components/settings/settings.component';
import { modulesProfileRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(modulesProfileRoutes)],
  declarations: [ProfileTemplateComponent, ProfileComponent, SettingsComponent],
})
export class ModulesProfileModule {}
