import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddressComponent } from './addresses/address.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country.component';
import { IndexComponent } from './index/index.component';
import { modulesDrawerRoutes } from './lib.routes';
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

@NgModule({
  declarations: [
    DrawerTemplateComponent,
    IndexComponent,
    AddressesComponent,
    AddressComponent,
    LocationsComponent,
    LocationComponent,
    CountriesComponent,
    CountryComponent,
    TeamsComponent,
    TeamComponent,
    RolesComponent,
    RoleComponent,
    RulesComponent,
    RuleComponent,
    PolicesComponent,
    PolicyComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(modulesDrawerRoutes)],
})
export class ModulesDrawerModule {}
