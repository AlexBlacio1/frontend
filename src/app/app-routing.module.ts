import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormComponent } from './screens/form/form.component';
import { MascotaComponent } from './screens/mascota/mascota.component';
import { LoginComponent } from './screens/login/login.component';
import { ServiciospageComponent } from './screens/serviciospage/serviciospage.component';
import { AdminComponent } from './screens/admin/admin.component';
import { PetslistComponent } from './screens/petslist/petslist.component';
import { UserlistComponent } from './screens/userlist/userlist.component';

const routes: Routes = [
  { path: "home", component:HomeComponent},
  { path: "editar/:idUsuario", component: ProductosComponent},
  { path: 'registro', component: FormComponent},
  { path: 'mascota', component: MascotaComponent},
  { path: 'login', component: LoginComponent},
  {path: 'servicios', component: ServiciospageComponent},
  {path: 'admin', component: AdminComponent },
  {path: 'pets', component: PetslistComponent},
  {path: 'users', component: UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
