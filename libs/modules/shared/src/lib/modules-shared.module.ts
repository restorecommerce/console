import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiVclModule } from '@console/ui/vcl';

@NgModule({
  imports: [CommonModule, UiVclModule.forChild()],
  exports: [CommonModule, UiVclModule],
})
export class ModulesSharedModule {}
