import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReporteVentaComponent } from './reporte-venta/reporte-venta.component';
import { FormsModule } from '@angular/forms';
import { ReporteVentaDetalladoComponent } from './reporte-venta-detallado/reporte-venta-detallado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './producto/modificar-producto/modificar-producto.component';

@NgModule({
  declarations: [AppComponent, VentaComponent, ReporteVentaComponent, ProductoComponent, NuevoProductoComponent, ModificarProductoComponent, ReporteVentaDetalladoComponent, ClienteComponent, NuevoClienteComponent, ModificarClienteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
