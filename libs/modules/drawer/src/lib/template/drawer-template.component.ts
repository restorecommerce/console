import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTER } from '@console/core/config';

@Component({
  selector: 'app-module-drawer-template',
  template: `
    <h1>DrawerTemplateComponent</h1>

    <h5>Sub-Menu:</h5>
    <ul>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.addresses.link
          "
          >Addresses</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.addresses.children.address.getLink(
              { id: 1 }
            )
          "
          >Addresses 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.locations.link
          "
          >Locations</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.locations.children.location.getLink(
              { id: 1 }
            )
          "
          >Locations 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.countries.link
          "
          >Countries</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.countries.children.country.getLink(
              { id: 1 }
            )
          "
          >Countries 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.teams.link
          "
          >Teams</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.teams.children.team.getLink(
              { id: 1 }
            )
          "
          >Teams 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.roles.link
          "
          >Roles</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.roles.children.role.getLink(
              { id: 1 }
            )
          "
          >Roles 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.rules.link
          "
          >Rules</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.rules.children.rule.getLink(
              { id: 1 }
            )
          "
          >Rules 1</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.polices.link
          "
          >Polices</a
        >
      </li>
      <li>
        <a
          [routerLink]="
            ROUTER.pages.private.children.drawer.children.polices.children.policy.getLink(
              { id: 1 }
            )
          "
          >Polices 1</a
        >
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerTemplateComponent {
  ROUTER = ROUTER;
}
