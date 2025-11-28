import { Component } from '@angular/core';

import { RsCardComponent } from '../../card/card.component';
import { RsCenteredPageComponent } from '../../centered-page/centered-page.component';
import { RsCopyrightComponent } from '../../copyright/copyright.component';

@Component({
  template: `
    <rs-centered-page>
      <div class="column gap-2">
        <rs-card>
          <ng-content></ng-content>
        </rs-card>

        <rs-copyright />
      </div>
    </rs-centered-page>
  `,
  selector: 'rs-auth-page',
  imports: [RsCenteredPageComponent, RsCardComponent, RsCopyrightComponent],
})
export class RsAuthPageComponent {}
