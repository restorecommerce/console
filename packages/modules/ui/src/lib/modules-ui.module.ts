import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TemplatePrivateComponent } from './components/templates/template-private/template-private.component';

const templates = [TemplatePrivateComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...templates],
  exports: [...templates],
})
export class ModulesUiModule {}
