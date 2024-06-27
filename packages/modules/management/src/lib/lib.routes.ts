import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { ManagementTemplateComponent } from './components/template/management-template.component';

export const modulesManagementRoutes: Route[] = [
  {
    path: '',
    component: ManagementTemplateComponent,
    title: ROUTER.pages.main.children.management.title,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.index.path,
        loadChildren: () =>
          import('./components/management/management.module').then(
            (m) => m.ManagementModule
          ),
        title: ROUTER.pages.main.children.management.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.path,
        loadChildren: () =>
          import('./components/iam/iam.module').then((m) => m.IamModule),
        title:
          ROUTER.pages.main.children.management.children.iam.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl.path,
        loadChildren: () =>
          import('./components/access-control/access-control.module').then(
            (m) => m.AccessControlModule
          ),
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.organizations.path,
        loadChildren: () =>
          import('./components/organization/organization.module').then(
            (m) => m.OrganizationModule
          ),
        title:
          ROUTER.pages.main.children.management.children.organizations.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.addresses.path,
        loadChildren: () =>
          import('./components/address/address.module').then(
            (m) => m.AddressModule
          ),
        title:
          ROUTER.pages.main.children.management.children.addresses.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.locations.path,
        loadChildren: () =>
          import('./components/location/location.module').then(
            (m) => m.LocationModule
          ),
        title:
          ROUTER.pages.main.children.management.children.locations.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.path,
        loadChildren: () =>
          import('./components/country/country.module').then(
            (m) => m.CountryModule
          ),
        title:
          ROUTER.pages.main.children.management.children.countries.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.commands.path,
        loadChildren: () =>
          import('./components/command/command.module').then(
            (m) => m.CommandModule
          ),
        title:
          ROUTER.pages.main.children.management.children.commands.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.contactPoints.path,
        loadChildren: () =>
          import('./components/contact-point/contact-point.module').then(
            (m) => m.ContactPointModule
          ),
        title:
          ROUTER.pages.main.children.management.children.contactPoints.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.contracts.path,
        loadChildren: () =>
          import('./components/contract/contract.module').then(
            (m) => m.ContractModule
          ),
        title:
          ROUTER.pages.main.children.management.children.contracts.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.teams.path,
        loadChildren: () =>
          import('./components/team/team.module').then((m) => m.TeamModule),
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .teams.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.path,
        loadChildren: () =>
          import('./components/role/role.module').then((m) => m.RoleModule),
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .roles.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.rules.path,
        loadChildren: () =>
          import('./components/rule/rule.module').then((m) => m.RuleModule),
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .rules.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.polices.path,
        loadChildren: () =>
          import('./components/policy/policy.module').then(
            (m) => m.PolicyModule
          ),
        title:
          ROUTER.pages.main.children.management.children.accessControl.children
            .polices.children.index.title,
      },
      {
        path: '**',
        redirectTo: ROUTER.pages.main.children.management.children.iam.path,
      },
    ],
  },
];
