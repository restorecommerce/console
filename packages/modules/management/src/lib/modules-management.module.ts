import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesSharedModule } from '@console-modules/shared';

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
import { modulesManagementRoutes } from './lib.routes';

@NgModule({
  declarations: [
    ManagementComponent,
    AccessControlComponent,
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
