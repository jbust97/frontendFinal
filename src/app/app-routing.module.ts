import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';

const routes: Routes = [
  {
    path: 'ventas',
    component: VentaComponent,
  },
  {
    path: 'reporte-ventas',
    component: ReporteVentaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
