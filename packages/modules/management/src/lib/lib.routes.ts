import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { AccessControlComponent } from './components/access-control/access-control.component';
import { AddressComponent } from './components/addresses/address.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CommandComponent } from './components/commands/command.component';
import { CommandsComponent } from './components/commands/commands.component';
import { ContactPointComponent } from './components/contact-points/contact-point.component';
import { ContactPointsComponent } from './components/contact-points/contact-points.component';
import { ContractComponent } from './components/contracts/contract.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/countries/country.component';
import { LocationComponent } from './components/locations/location.component';
import { LocationsComponent } from './components/locations/locations.component';
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
        // pathMatch: 'full',
        component: ManagementComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.addresses.path,
        component: AddressesComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.addresses.children
          .address.path,
        component: AddressComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.locations.path,
        component: LocationsComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.locations.children
          .location.path,
        component: LocationComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.path,
        component: CountriesComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.countries.children
          .country.path,
        component: CountryComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.commands.path,
        component: CommandsComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.commands.children
          .command.path,
        component: CommandComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.contactPoints.path,
        component: ContactPointsComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.contactPoints
          .children.contactPoint.path,
        component: ContactPointComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.contracts.path,
        component: ContractsComponent,
      },
      {
        path: ROUTER.pages.main.children.management.children.contracts.children
          .contract.path,
        component: ContractComponent,
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
