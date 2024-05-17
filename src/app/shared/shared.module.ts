import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [NavbarComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [NavbarComponent , ButtonComponent],
})
export class SharedModule {}
