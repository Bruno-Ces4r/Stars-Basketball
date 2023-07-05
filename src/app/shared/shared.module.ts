import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatDividerModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
