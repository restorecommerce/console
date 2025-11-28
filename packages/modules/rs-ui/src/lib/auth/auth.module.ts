import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RsPasswordRecoveryComponent } from './password-recovery';
import { RsSignInComponent } from './sign-in';

@NgModule({
  imports: [RsSignInComponent, RsPasswordRecoveryComponent, AuthRoutingModule],
  exports: [RsSignInComponent, RsPasswordRecoveryComponent, AuthRoutingModule],
})
export class RsAuthModule {}
