import { Component } from '@angular/core';

import { RcCenteredPageComponent, RcCardComponent } from '../../shared';

@Component({
  template: `
    <rc-centered-page>
      <div class="col">
        <rc-card class="mb-5">
          <ng-content></ng-content>
        </rc-card>

        <!-- <rc-copyright /> -->
      </div>
    </rc-centered-page>
  `,
  selector: 'rc-auth-layout',
  imports: [RcCenteredPageComponent, RcCardComponent],
})
export class RsAuthLayoutComponent {}
