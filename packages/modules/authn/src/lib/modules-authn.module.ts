import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

import { ActivationComponent } from './components/activation/activation.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthnTemplateComponent } from './components/template/authn-template.component';
import { modulesAuthnRoutes } from './lib.routes';

@NgModule({
  imports: [ModulesSharedModule, RouterModule.forChild(modulesAuthnRoutes)],
  declarations: [
    AuthnTemplateComponent,
    SignInComponent,
    SignUpComponent,
    PasswordRecoveryComponent,
    ActivationComponent,
    ConfirmEmailComponent,
  ],
})
export class ModulesAuthnModule {}
