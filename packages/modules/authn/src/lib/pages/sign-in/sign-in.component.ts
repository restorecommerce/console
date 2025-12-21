import { Component } from '@angular/core';
import { RcSignInComponent } from '@console/rc-ui';

@Component({
  selector: 'app-sign-in',
  template: ` <rc-sign-in (signIn)="onSignIn()" /> `,
  imports: [RcSignInComponent],
})
export class SignInComponent {
  onSignIn() {
    console.log('Signin...');
  }
}
