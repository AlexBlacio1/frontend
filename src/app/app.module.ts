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
import {HttpClientModule} from '@angular/common/http';
import { MascotaComponent } from './screens/mascota/mascota.component';
import { FormMascotaComponent } from './components/form-mascota/form-mascota.component';
import { TablaMascotaComponent } from './components/tabla-mascota/tabla-mascota.component';
import { LoginComponent } from './screens/login/login.component';
import { ServiciospageComponent } from './screens/serviciospage/serviciospage.component';
import { AdminComponent } from './screens/admin/admin.component';
import { UserlistComponent } from './screens/userlist/userlist.component';
import { PetslistComponent } from './screens/petslist/petslist.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    TablaComponent,
    HomeComponent,
    ProductosComponent,
    MascotaComponent,
    FormMascotaComponent,
    TablaMascotaComponent,
    LoginComponent,
    ServiciospageComponent,
    AdminComponent,
    UserlistComponent,
    PetslistComponent

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
