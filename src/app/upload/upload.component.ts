import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {GROUP, Item, SIZE, TYPE} from "../../shared/dataModel";
import {Observable} from "rxjs/Observable";
import {AngularFireUploadTask} from "angularfire2/storage";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  prodCollection: AngularFirestoreCollection<Item>;

    anton_fitted_sheet: Item = {
    id: '0',
    collection: 'Anton',
    group: GROUP.Bed,
    type: TYPE.Fitted_sheet,
    image: ['images/anton_fitted_sheet_1.jpeg', 'images/anton_fitted_sheet_2.jpeg'],
    price: [
      { size: SIZE.CM90x190, price: '10'},
      { size: SIZE.CM140x190, price: '15'},
      { size: SIZE.CM160x200, price: '20'},
      { size: SIZE.CM180x200, price: '25'},
    ],
    composition: '100% Cotton, Quality Reinforced Canvas',
    description: 'Anton fitted sheet  made of reinforced canvas 100% cotton (57 threads / cm²). The fitted sheet Anton is a print of micro patterns in the shape of a gray diamond on a black background. Bonnet of 30cm. Complete your Anton bedding set with duvet cover, bed sheet and pillowcase from the same collection.'
  }

  constructor(private afs: AngularFirestore){
    this.prodCollection = this.afs.collection('products');
  }

  ngOnInit(): void {
    this.addItem('anton_fitted_sheet', this.anton_fitted_sheet)

  }


  addItem(path:string, item: Item) {
    this.prodCollection.doc(path).set(item).then(data => console.log("Loaded"));
  }


}
