import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-authn-template',
  template: `
    <rc-public-template>
      <router-outlet></router-outlet>
    </rc-public-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthnTemplateComponent {}
