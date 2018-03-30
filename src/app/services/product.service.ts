import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Note} from "../../shared/dataModel";

@Injectable()
export class ProductService {

  productCollection: AngularFirestoreCollection<Note>;
  products: Observable<Note[]>;
  product: Observable<Note>;
  productRef = 'note';


  constructor(private afs: AngularFirestore) {

  }

  getProducts(): Observable<Note[]> {
    return this.afs
      .collection<Note>(this.productRef)
      .snapshotChanges().map(changes => {
        return changes.map(a => {
        const data = a.payload.doc.data() as Note;
        data.id = a.payload.doc.id;
        return data;
      })
    });
  }

  getProduct(productID: string):Observable<Note>{
    return this.afs
      .doc<Note>(this.productRef + '/' + productID)
      .snapshotChanges().map(a => {
          const data = a.payload.data() as Note;
          data.id = a.payload.id;
          return data;
        });
  }


}
