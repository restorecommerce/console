import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { ModulesUiModule } from '@console-modules/ui';

import { OrganizationCreateComponent } from './organization-create.component';
import { OrganizationEditComponent } from './organization-edit.component';
import { OrganizationIndexComponent } from './organization-index.component';
import { OrganizationViewComponent } from './organization-view.component';
import { OrganizationTemplateComponent } from './template/organization-template.component';
import { OrganizationParentDetailsComponent } from './views/organization-parent-details.component';
import { OrganizationDetailsComponent } from './views/organization-view-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.management.children.organizations
          .children.index.path,
        component: OrganizationIndexComponent,
        title:
          ROUTER.pages.main.children.management.children.organizations.children
            .index.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.organizations
          .children.view.path,
        component: OrganizationViewComponent,
        title:
          ROUTER.pages.main.children.management.children.organizations.children
            .view.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.organizations
          .children.create.path,
        component: OrganizationCreateComponent,
        title:
          ROUTER.pages.main.children.management.children.organizations.children
            .create.title,
      },
      {
        path: ROUTER.pages.main.children.management.children.organizations
          .children.edit.path,
        component: OrganizationEditComponent,
        title:
          ROUTER.pages.main.children.management.children.organizations.children
            .edit.title,
      },
      {
        path: '**',
        redirectTo:
          ROUTER.pages.main.children.management.children.organizations.children
            .index.path,
      },
    ],
  },
];

@NgModule({
  declarations: [
    OrganizationIndexComponent,
    OrganizationCreateComponent,
    OrganizationEditComponent,
    OrganizationViewComponent,
    OrganizationDetailsComponent,
    OrganizationParentDetailsComponent,
    OrganizationTemplateComponent,
  ],
  imports: [ModulesUiModule.forChild(), RouterModule.forChild(routes)],
})
export class OrganizationModule {}
