import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {
  @Input() categorias: any[] = [];
  @Output() alBuscar = new EventEmitter<string>();
  @Output() alCambiarCategoria = new EventEmitter<number | null>();

  categoriaActiva: number | null = null;

  onInput(evento: Event) {
    const texto = (evento.target as HTMLInputElement).value;
    this.alBuscar.emit(texto);
  }

  seleccionarCategoria(id: number | null) {
    this.categoriaActiva = id;
    this.alCambiarCategoria.emit(id);
  }
}
