import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PageHomeComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'contact',
    component: PageContactComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
