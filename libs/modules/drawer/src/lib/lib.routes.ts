import { Route } from '@angular/router';

import { ROUTER } from '@console/core/config';

import { AddressComponent } from './addresses/address.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country.component';
import { IndexComponent } from './index/index.component';
import { LocationComponent } from './locations/location.component';
import { LocationsComponent } from './locations/locations.component';
import { PolicesComponent } from './polices/polices.component';
import { PolicyComponent } from './polices/policy.component';
import { RoleComponent } from './roles/role.component';
import { RolesComponent } from './roles/roles.component';
import { RuleComponent } from './rules/rule.component';
import { RulesComponent } from './rules/rules.component';
import { TeamComponent } from './teams/team.component';
import { TeamsComponent } from './teams/teams.component';
import { DrawerTemplateComponent } from './template/drawer-template.component';

export const modulesDrawerRoutes: Route[] = [
  {
    path: '',
    component: DrawerTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.addresses.path,
        component: AddressesComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.addresses.children
          .address.path,
        component: AddressComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.locations.path,
        component: LocationsComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.locations.children
          .location.path,
        component: LocationComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.countries.path,
        component: CountriesComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.countries.children
          .country.path,
        component: CountryComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.teams.path,
        component: TeamsComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.teams.children.team
          .path,
        component: TeamComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.roles.path,
        component: RolesComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.roles.children.role
          .path,
        component: RoleComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.rules.path,
        component: RulesComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.rules.children.rule
          .path,
        component: RuleComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.polices.path,
        component: PolicesComponent,
      },
      {
        path: ROUTER.pages.private.children.drawer.children.polices.children
          .policy.path,
        component: PolicyComponent,
      },
    ],
  },
];
