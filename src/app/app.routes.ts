import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Productos } from './paginas/productos/productos';

export const routes: Routes = [
  { path: '', component: Inicio },             // Ruta raíz para el Inicio
  { path: 'productos', component: Productos }, // Ruta para el catálogo
  { path: '**', redirectTo: '', pathMatch: 'full' }     // Redirección por defecto
];
