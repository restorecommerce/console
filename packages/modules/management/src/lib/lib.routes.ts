import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ManagementComponent } from './components/management/management.component';
import { ManagementTemplateComponent } from './components/template/management-template.component';

export const modulesManagementRoutes: Route[] = [
  {
    path: '',
    component: ManagementTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ManagementComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.addresses.path,
        loadChildren: () =>
          import('./components/address/address.module').then(
            (m) => m.AddressModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.locations.path,
        loadChildren: () =>
          import('./components/location/location.module').then(
            (m) => m.LocationModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.path,
        loadChildren: () =>
          import('./components/country/country.module').then(
            (m) => m.CountryModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.commands.path,
        loadChildren: () =>
          import('./components/command/command.module').then(
            (m) => m.CommandModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.contactPoints.path,
        loadChildren: () =>
          import('./components/contact-point/contact-point.module').then(
            (m) => m.ContactPointModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.contracts.path,
        loadChildren: () =>
          import('./components/contract/contract.module').then(
            (m) => m.ContractModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl.path,
        loadChildren: () =>
          import('./components/access-control/access-control.module').then(
            (m) => m.AccessControlModule
          ),
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.teams.path,
        loadChildren: () =>
          import('./components/team/team.module').then((m) => m.TeamModule),
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.path,
        loadChildren: () =>
          import('./components/role/role.module').then((m) => m.RoleModule),
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.rules.path,
        loadChildren: () =>
          import('./components/rule/rule.module').then((m) => m.RuleModule),
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.polices.path,
        loadChildren: () =>
          import('./components/policy/policy.module').then(
            (m) => m.PolicyModule
          ),
      },
    ],
  },
];
