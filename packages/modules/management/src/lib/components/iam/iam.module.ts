import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { UserCreationFormComponent } from './forms/user-creation-form/user-creation-form.component';
import { IamChangePasswordComponent } from './iam-change-password.component';
import { IamCreateComponent } from './iam-create.component';
import { IamEditComponent } from './iam-edit.component';
import { IamIndexComponent } from './iam-index.component';
import { IamViewComponent } from './iam-view.component';
import { AppendLastLoginPipe } from './pipes/append-last-login.pipe';
import { IamRoleAssociationModalComponent } from './role-association-modal.component';
import { IamTemplateComponent } from './template/iam-template.component';
import { IamChangePasswordFormComponent } from './views/iam-change-password-form.component';
import { IamDetailsComponent } from './views/iam-details.component';

const routes: Routes = [
  {
    path: '',
    component: IamTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.iam.children.index
          .path,
        component: IamIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.iam.children.index
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.children.view
          .path,
        component: IamViewComponent,
        title:
          ROUTER.pages.main.children.management.children.iam.children.view
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.children.create
          .path,
        component: IamCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.iam.children.create
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.children.edit
          .path,
        component: IamEditComponent,
        title:
          ROUTER.pages.main.children.management.children.iam.children.edit
            .title,
      },
      {
        path: ROUTER.pages.main.children.management.children.iam.children[
          'change-password'
        ].path,
        component: IamChangePasswordComponent,
        title:
          ROUTER.pages.main.children.management.children.iam.children[
            'change-password'
          ].title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.iam.children.index
            .path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    IamCreateComponent,
    IamEditComponent,
    IamChangePasswordComponent,
    IamIndexComponent,
    IamViewComponent,
    IamDetailsComponent,
    IamChangePasswordFormComponent,
    IamTemplateComponent,
    IamRoleAssociationModalComponent,
    UserCreationFormComponent,
    AppendLastLoginPipe,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class IamModule {}
