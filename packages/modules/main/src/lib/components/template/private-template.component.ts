import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SecurityFacade } from '@console-core/store/security';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <rc-private-template [logout]="logout">
      <router-outlet></router-outlet>
    </rc-private-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent {
  logout = () => this.securityFacade.logout();

  constructor(private readonly securityFacade: SecurityFacade) {}
}
