import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

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
import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  declarations: [
    AddressComponent,
    AddressesComponent,
    CommandComponent,
    CommandsComponent,
    ContactPointComponent,
    ContactPointsComponent,
    ContractComponent,
    ContractsComponent,
    CountriesComponent,
    CountryComponent,
    LocationComponent,
    LocationsComponent,
    ManagementComponent,
    PolicesComponent,
    PolicyComponent,
    RoleComponent,
    RolesComponent,
    RuleComponent,
    RulesComponent,
    TeamComponent,
    TeamsComponent,
    ManagementTemplateComponent,
  ],
  imports: [
    ModulesSharedModule,
    RouterModule.forChild(modulesManagementRoutes),
  ],
})
export class ModulesManagementModule {}
