import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RsPasswordRecoveryComponent } from './password-recovery';
import { RsSignInComponent } from './sign-in';
import { RsSignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    RsSignInComponent,
    RsSignUpComponent,
    RsPasswordRecoveryComponent,
    AuthRoutingModule,
  ],
  exports: [
    RsSignInComponent,
    RsSignUpComponent,
    RsPasswordRecoveryComponent,
    AuthRoutingModule,
  ],
})
export class RsAuthModule {}
