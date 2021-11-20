import { Component, OnInit } from '@angular/core';
import { CabeceraVenta } from '../models/cabeceraVenta';
import { ReporteVentasService } from '../service/reporte-ventas.service';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.css'],
})
export class ReporteVentaComponent implements OnInit {
  public numeroDocumento: string = '4909519';
  public fechaDesde: string = '';
  public fechaHasta: string = '';
  public listaVentas: CabeceraVenta[] = [];
  constructor(private reporteVentasService: ReporteVentasService) {}

  ngOnInit(): void {}

  getVentas(): void {
    const fechaDesde = new Date(this.fechaDesde);
    const fechaHasta = new Date(this.fechaHasta);
    console.log(fechaHasta, fechaDesde);
    this.reporteVentasService.getVentas(
      this.numeroDocumento,
      fechaDesde,
      fechaHasta
    );
  }
}
