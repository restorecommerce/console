import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { IamIndexComponent } from './components/iam-index.component';
import { IamViewComponent } from './components/iam-view.component';

const routes: Routes = [
  {
    path: '',
    component: IamIndexComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.iam.children.index
          .path,
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
      // {
      //   path: ROUTER.pages.main.children.management.children.iam.children[
      //     'change-password'
      //   ].path,
      //   component: IamChangePasswordComponent,
      //   title:
      //     ROUTER.pages.main.children.management.children.iam.children[
      //       'change-password'
      //     ].title,
      // },
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
  imports: [RouterModule.forChild(routes)],
})
export class IamModule {}
