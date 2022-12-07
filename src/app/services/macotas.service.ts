import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascotasInterface';

@Injectable({
  providedIn: 'root',
})
export class GestMascotasService {
  constructor(private firestore: Firestore) {}

  //Añadir algo a la base de datos
  addMascota(mascota: Mascota) {
    const ref = collection(this.firestore, 'mascotas');
    return addDoc(ref, mascota);
  }
  //Recoger la lista de la coleccion para mostrarla
  getMascota(): Observable<Mascota[]> {
    const ref = collection(this.firestore, 'mascotas');
    return collectionData(ref, { idField: 'id' }) as Observable<Mascota[]>;
  }
  //Eliminar algo de la coleccion
  deleteMascota(mascota: Mascota) {
    const ClientDocRef = doc(this.firestore, `mascotas/${mascota.id}`);
    return deleteDoc(ClientDocRef);
  }
}
