import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModuleModule } from '../module/module.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonPrimaryComponent,
    InputComponent,
    DropdownComponent,
  ],
  imports: [CommonModule, ModuleModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    InputComponent,
    DropdownComponent,
  ],
})
export class ComponentModule {}
