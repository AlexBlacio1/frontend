import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './screens/form/form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    TablaComponent,
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
