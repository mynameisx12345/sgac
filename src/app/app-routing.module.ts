import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:'/auth/login', pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./user-authentication/user-authentication.module').then(m=>m.UserAuthenticationModule)
  },
  {
    path: 'confession',
    loadChildren: ()=> import('./confession/confession.module').then(m=>m.ConfessionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
