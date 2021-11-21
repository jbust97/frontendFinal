import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {}

  agregarProducto() {
    this.producto.id = uuid();
    this.productoService.create(this.producto).then(() => {
      console.log("Producto agregado!");
      console.log(this.producto);
      window.location.pathname = "productos";
    })
  }

}
