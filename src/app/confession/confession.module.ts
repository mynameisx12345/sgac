import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../shared/components/component.module';
import { ModuleModule } from '../shared/module/module.module';
import { ConfessionPageComponent } from './confession-page/confession-page.component';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { MyConfessionsComponent } from './my-confessions/my-confessions.component';
import { GuardiansComponent } from './guardians/guardians.component';

const routes: Routes = [
  {path: 'confess', component: ConfessionPageComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'my-confession', component: MyConfessionsComponent},
  {path: 'guardian', component: GuardiansComponent},


]

@NgModule({
  declarations: [
    ConfessionPageComponent,
    QuotesComponent,
    MyConfessionsComponent,
    GuardiansComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfessionModule { }
