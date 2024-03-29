import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { PreferencesComponent } from './preferences.component';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PreferencesComponent,
      },
    ]),
  ],
  declarations: [PreferencesComponent],
})
export class PreferencesModule {}
