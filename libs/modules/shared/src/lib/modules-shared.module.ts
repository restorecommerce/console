import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiVclModule } from '@console/ui/vcl';

@NgModule({
  imports: [CommonModule, RouterModule, UiVclModule],
  exports: [CommonModule, RouterModule, UiVclModule],
})
export class ModulesSharedModule {}
