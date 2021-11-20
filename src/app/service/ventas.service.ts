import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { CabeceraVenta } from '../models/cabeceraVenta';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private collectionId =  'ventas';

  constructor(private firestore: Firestore) {}

  async getAll() {
    const querySnapshot = await getDocs(collection(this.firestore, this.collectionId));
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      data.id = doc.id 
      return data;
    })
  }

  async create(ventas: CabeceraVenta) {
    return setDoc(
      doc(
        collection(this.firestore, this.collectionId), 
        ventas.id
      ), 
      ventas
    );
  }

  async retrieve(id: string) {
    const docRef = doc(this.firestore, this.collectionId, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async update(ventas: CabeceraVenta) {
    const docRef = doc(this.firestore, this.collectionId, ventas.id);
    return updateDoc(docRef, {...ventas});
  }

  async delete(id: string) {
    return deleteDoc(doc(this.firestore, this.collectionId,id));
  }

}