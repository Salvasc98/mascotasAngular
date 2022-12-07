import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas.component';
//import { RegistrarMascotasComponent } from './components/registrar-mascotas/registrar-mascotas.component';

const routes: Routes = [
  { path: 'alumnos', component: ListaMascotasComponent },
  //{ path: 'añadir-alumno', component: RegistrarMascotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
