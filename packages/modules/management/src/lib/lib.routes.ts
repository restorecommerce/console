import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { AccessControlComponent } from './components/access-control/access-control.component';
import { ManagementComponent } from './components/management/management.component';
import { PolicesComponent } from './components/polices/polices.component';
import { PolicyComponent } from './components/polices/policy.component';
import { RoleComponent } from './components/roles/role.component';
import { RolesComponent } from './components/roles/roles.component';
import { RuleComponent } from './components/rules/rule.component';
import { RulesComponent } from './components/rules/rules.component';
import { TeamComponent } from './components/teams/team.component';
import { TeamsComponent } from './components/teams/teams.component';
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
        component: AccessControlComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.teams.path,
        component: TeamsComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.teams.children.team.path,
        component: TeamComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.path,
        component: RolesComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.roles.children.role.path,
        component: RoleComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.rules.path,
        component: RulesComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.rules.children.rule.path,
        component: RuleComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.polices.path,
        component: PolicesComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.accessControl
          .children.polices.children.policy.path,
        component: PolicyComponent,
      },
    ],
  },
];
