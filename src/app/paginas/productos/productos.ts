import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- Importa ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { TiendaService } from '../../servicios/tienda';
import { Buscador } from '../../componentes/buscador/buscador';
import { ListadoProductos } from '../../componentes/listado-productos/listado-productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, Buscador, ListadoProductos],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  categorias: any[] = [];

  idCategoriaSeleccionada: number | null = null;
  textoBusqueda: string = '';

  constructor(
    private tiendaService: TiendaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.tiendaService.getCategorias().subscribe(data => {
      this.categorias = data;
      this.cdr.detectChanges();
    });

    this.tiendaService.getProductos().subscribe(data => {
      this.productos = data;
      this.productosFiltrados = data;
      this.cdr.detectChanges();
    });
  }

  onBuscar(texto: string) {
    this.textoBusqueda = texto.toLowerCase();
    this.aplicarFiltros();
    this.cdr.detectChanges();
  }

  onFiltrarCategoria(idCategoria: number | null) {
    this.idCategoriaSeleccionada = idCategoria;
    this.aplicarFiltros();
    this.cdr.detectChanges();
  }

  aplicarFiltros() {
    this.productosFiltrados = this.productos.filter(p => {
      const cumpleCategoria = this.idCategoriaSeleccionada === null || p.categoriaId === this.idCategoriaSeleccionada;
      const cumpleNombre = p.nombre.toLowerCase().includes(this.textoBusqueda);
      return cumpleCategoria && cumpleNombre;
    });
  }
}
