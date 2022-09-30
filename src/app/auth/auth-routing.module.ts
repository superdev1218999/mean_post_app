import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinginComponent } from './signin/signin.component';
import { SingupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'signin', component: SinginComponent},
  { path: 'signup', component: SingupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
