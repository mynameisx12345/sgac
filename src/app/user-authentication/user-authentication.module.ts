import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule,  Routes } from '@angular/router';
import { ComponentModule } from '../shared/components/component.module';
import { RegisterComponent } from './register/register.component';
import { ModuleModule } from '../shared/module/module.module';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentModule,
    ModuleModule
  ]
})
export class UserAuthenticationModule { }
