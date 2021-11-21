import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.producto.id = paramMap.get('id') ?? '';
      this.productoService.retrieve(this.producto.id)
        .then(data => {
          this.producto.codigo = (data as any).codigo;
          this.producto.nombre = (data as any).nombre;
          this.producto.precioVenta = (data as any).precioVenta;
          this.producto.existencia = (data as any).existencia;
        });
    });
  }

  modificarProducto() {
    this.productoService.update(this.producto).then(() => window.location.pathname = "productos");
  }

}
