import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    PanelMenuModule,
    ProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SpinnerComponent
  ],

  providers: [],

})
export class LayoutModule { }
