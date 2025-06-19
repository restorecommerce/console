import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesUiModule } from '@console-modules/ui';

@NgModule({
  declarations: [],
  imports: [ModulesUiModule.forChild()],
})
export class ModulesProductModule {}
