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
import { ProductoComponent } from './producto/producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { ModificarProductoComponent } from './producto/modificar-producto/modificar-producto.component';

@NgModule({
  declarations: [AppComponent, VentaComponent, ReporteVentaComponent, ProductoComponent, NuevoProductoComponent, ModificarProductoComponent],
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
