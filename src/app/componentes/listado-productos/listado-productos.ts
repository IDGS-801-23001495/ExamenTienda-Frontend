import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  @Input() productos: any[] = [];
}
