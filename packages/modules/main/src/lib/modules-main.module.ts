import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { ModulesSharedModule } from '@console-modules/shared';
import { ModulesUiBaseModule, ModulesUiModule } from '@console-modules/ui';

import {
  PrivateTemplateComponent,
  PublicTemplateComponent,
} from './components/template';
import { modulesMainRoutes } from './lib.routes';

@NgModule({
  declarations: [PrivateTemplateComponent, PublicTemplateComponent],
  imports: [
    ModulesSharedModule,
    ModulesUiBaseModule,
    ModulesUiModule.forRoot(),
    VCLDateAdapterModule.forRoot(),
    RouterModule.forChild(modulesMainRoutes),
  ],
})
export class ModulesMainModule {}
