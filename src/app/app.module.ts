import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireStorageModule} from "angularfire2/storage";
import { UploadComponent } from './upload/upload.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService} from "./services/product.service";


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
