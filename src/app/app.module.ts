import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './_layout/layout.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SpinnerService } from './_layout/spinner/spinner/spinner.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
    //AnimatedCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    MessageService,
    SpinnerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
