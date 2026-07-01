import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaService } from '../../servicios/tienda'; // Asegúrate de que la ruta a tu servicio sea correcta

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit {
  productosPrincipales: any[] = [];

  constructor(
    private tiendaService: TiendaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Consumimos la API de productos
    this.tiendaService.getProductos().subscribe(data => {
      this.productosPrincipales = data.slice(0, 3);

      this.cdr.detectChanges();
    });
  }
}
