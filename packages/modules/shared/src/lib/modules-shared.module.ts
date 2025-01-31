import { NgModule } from '@angular/core';

import { FuseSearchPipe } from './pipes';

@NgModule({
  declarations: [FuseSearchPipe],
  exports: [FuseSearchPipe],
})
export class ModulesSharedModule {}
