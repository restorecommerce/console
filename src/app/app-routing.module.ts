import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoopComponent } from './pages/noop/noop.component';
import { HomeComponent } from './pages/home/home.component';
import { OverflowComponent } from './pages/overflow/overflow.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'overflow',
    component: OverflowComponent,
  },
  {
    path: 'drawer-demo',
    children: [
      {
        path: 'addresses',
        component: NoopComponent,
      },
      {
        path: 'locations/:id',
        component: NoopComponent,
      },
      {
        path: 'countries/:id',
        component: NoopComponent,
      },
      {
        path: 'teams',
        component: NoopComponent,
      },
      {
        path: 'roles',
        component: NoopComponent,
      },
      {
        path: 'rules',
        component: NoopComponent,
      },
      {
        path: 'policies',
        component: NoopComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
