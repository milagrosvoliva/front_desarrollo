import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { AgregarRestauranteComponent } from './pages/agregar-restaurante/agregar-restaurante.component';
import { EditarRestauranteComponent } from './pages/editar-restaurante/editar-restaurante.component';
import { VerRestauranteComponent } from './pages/ver-restaurante/ver-restaurante.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'restaurantes', component: RestaurantesComponent },
      { path: 'agregar-restaurante', component: AgregarRestauranteComponent },
      { path: 'editar-restaurante', component: EditarRestauranteComponent },
      { path: 'ver-restaurante', component: VerRestauranteComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
