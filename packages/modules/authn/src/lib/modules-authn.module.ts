import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ModulesSharedModule } from '@console-modules/shared';

import { AuthnEffects, AuthnFacade, authnReducer } from './+state/authn';
import { AuthnTemplateComponent } from './components/template/authn-template.component';
import { modulesAuthnRoutes } from './lib.routes';
import { AuthnService } from './services';

@NgModule({
  imports: [
    ModulesSharedModule,
    RouterModule.forChild(modulesAuthnRoutes),
    StoreModule.forFeature(STORE.states.authnState, authnReducer),
    EffectsModule.forFeature([AuthnEffects]),
  ],
  declarations: [AuthnTemplateComponent],
  providers: [AuthnService, AuthnFacade],
})
export class ModulesAuthnModule {}
