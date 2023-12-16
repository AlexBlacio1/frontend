import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormComponent } from './screens/form/form.component';

const routes: Routes = [
  { path: "home", component:HomeComponent},
  { path: "editar/:id", component: ProductosComponent},
  { path: 'formulario', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
