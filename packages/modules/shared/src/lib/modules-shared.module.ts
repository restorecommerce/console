import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModulesUiModule } from '@console-modules/ui';

@NgModule({
  imports: [CommonModule, ModulesUiModule.forChild()],
  exports: [CommonModule, ModulesUiModule],
})
export class ModulesSharedModule {}
