import { ViewComponent } from './component/view/view.component';
import { CreateComponent } from './component/create/create.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/view',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'view',
        component: ViewComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home/view',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
