import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTER } from '@console/core/config';

@Component({
  selector: 'app-module-private-template',
  template: `
    <h3>PrivateTemplateComponent</h3>

    <h5>Menu:</h5>
    <ul>
      <li>
        <a [routerLink]="ROUTER.pages.private.children.home.link">Home</a>
      </li>
      <li>
        <a [routerLink]="ROUTER.pages.private.children.drawer.link">Drawer</a>
      </li>
      <li>
        <a [routerLink]="ROUTER.pages.private.children.layout.link">Layout</a>
      </li>
      <li>
        <a [routerLink]="ROUTER.pages.private.children.overflow.link"
          >Overflow</a
        >
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent {
  ROUTER = ROUTER;
}
