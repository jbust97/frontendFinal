import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';
import { ProductoComponent } from './producto/producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './producto/modificar-producto/modificar-producto.component';
import { ReporteVentaDetalladoComponent } from './reporte-venta-detallado/reporte-venta-detallado.component';

const routes: Routes = [
  {
    path: 'ventas',
    component: VentaComponent,
  },
  {
    path: 'reporte-ventas',
    component: ReporteVentaComponent,
  },
  {
    path: 'productos',
    component: ProductoComponent,
  },
  {
    path: 'productos/nuevo',
    component: NuevoProductoComponent,
  },
  {
    path: 'productos/:id/editar',
    component: ModificarProductoComponent,
  },
  {
    path: 'reporte-ventas-detallado',
    component: ReporteVentaDetalladoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
