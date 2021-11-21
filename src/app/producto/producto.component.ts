import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { DocumentData } from '@angular/fire/firestore'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  columns = ["Codigo", "Nombre", "Precio", "Existencia"]
  data: DocumentData[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getAll()
      .then(data => this.data = data);
  }

  eliminarProducto(id: string) {
    console.log("Eliminando producto: " + id)
    this.productoService.delete(id).then(() => window.location.reload());
  }

}
