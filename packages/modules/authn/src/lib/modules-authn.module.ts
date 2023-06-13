import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthnTemplateComponent } from './components/authn-template.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modulesAuthnRoutes),
    RouterModule.forChild(modulesAuthnRoutes),
  ],
  declarations: [
    AuthnTemplateComponent,
    LoginComponent,
    PasswordRecoveryComponent,
  ],
})
export class ModulesAuthnModule {}
