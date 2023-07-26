import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-template',
  template: ` <router-outlet /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthnTemplateComponent {}
