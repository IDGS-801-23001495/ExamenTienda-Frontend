import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cabecera } from './componentes/cabecera/cabecera'; // Ajusta la ruta a tu archivo de cabecera
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Cabecera, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'TiendaTonoFrontend';
}
