import { Component, ChangeDetectionStrategy } from '@angular/core';

import { APP, ROUTER } from '@console-core/config';
@Component({
  selector: 'rc-public-template',
  templateUrl: './public-template.component.html',
  styles: [
    `
      main {
        margin: 0 auto;
        padding: 20px 0 40px;
        width: 520px;
        max-width: 520px;
        min-width: 520px;

        @media (max-width: 520px) {
          width: 100%;
          max-width: 100%;
          min-width: 100%;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcPublicTemplateComponent {
  APP = APP;
  ROUTER = ROUTER;
}
