import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIconModule } from '@vcl/ng-vcl';

import { ModulesUiModule } from '@console-modules/ui';

@NgModule({
  imports: [CommonModule, VCLIconModule, ModulesUiModule.forChild()],
  exports: [CommonModule, VCLIconModule, ModulesUiModule],
})
export class ModulesSharedModule {}
