import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

import { PreferencesComponent } from './preferences.component';

@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    ModulesUiModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: PreferencesComponent,
      },
    ]),
  ],
})
export class PreferencesModule {}
