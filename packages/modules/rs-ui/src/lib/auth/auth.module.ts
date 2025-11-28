import { NgModule } from '@angular/core';

import { RsAuthPageComponent } from './auth-page/auth-page.component';
import { RsAuthResultPageComponent } from './auth-result-page/auth-result-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RsConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { RsPasswordRecoveryComponent } from './password-recovery';
import { RsSignInComponent } from './sign-in';
import { RsSignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RsSignInComponent,
    RsSignUpComponent,
    RsPasswordRecoveryComponent,
    AuthRoutingModule,
    RsConfirmPasswordComponent,
    RsAuthPageComponent,
    RsAuthResultPageComponent,
  ],
  exports: [
    RsSignInComponent,
    RsSignUpComponent,
    RsPasswordRecoveryComponent,
    AuthRoutingModule,
    RsAuthPageComponent,
    RsAuthResultPageComponent,
  ],
})
export class RsAuthModule {}
