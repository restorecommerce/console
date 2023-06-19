import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-template',
  template: `
    <h3>AuthnTemplateComponent</h3>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthnTemplateComponent {}
