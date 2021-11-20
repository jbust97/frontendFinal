import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { query, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ReporteVentasService {
  private collectionId = 'ventas';
  constructor(private store: Firestore) {}

  async getVentas(
    rucCliente: string,
    fechaDesde: Date,
    fechaHasta: Date
  ): Promise<any> {
    const clienteRef = collection(this.store, 'clientes');
    const ventasRef = collection(this.store, 'ventas');
    const cliente = await getDocs(
      query(clienteRef, where('ruc', '==', rucCliente))
    );
    let clientRef;
    cliente.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      clientRef = doc.data();
    });
    console.log(where('cliente', '==', clientRef));
    console.log(where('fecha', '>=', fechaDesde));
    console.log(where('fecha', '<=', fechaHasta));

    const ventas = await getDocs(
      query(
        ventasRef,
        where('cliente', '==', clientRef),
        where('fecha', '>=', fechaDesde),
        where('fecha', '<=', fechaHasta)
      )
    );
    console.log(ventas);

    return {};
  }
}
