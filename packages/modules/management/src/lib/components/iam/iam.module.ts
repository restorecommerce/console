import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { IamCreateComponent } from './iam-create.component';
import { IamEditComponent } from './iam-edit.component';
import { IamIndexComponent } from './iam-index.component';
import { IamViewDetailsComponent } from './iam-view-details.component';
import { IamViewComponent } from './iam-view.component';
import { IamTemplateComponent } from './template/iam-template.component';

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
    IamIndexComponent,
    IamViewComponent,
    IamViewDetailsComponent,
    IamTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class IamModule {}
