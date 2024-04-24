import { NgModule } from '@angular/core';

import { ModulesUiModule } from '@console-modules/ui';

@NgModule({
  imports: [ModulesUiModule.forChild()],
})
export class ModulesSharedModule {}
