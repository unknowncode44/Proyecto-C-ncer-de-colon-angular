import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    Navbar2Component,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    Navbar2Component
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SharedModule { }
