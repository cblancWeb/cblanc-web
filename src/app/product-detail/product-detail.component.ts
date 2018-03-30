import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Note} from '../../shared/dataModel';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Note[];
  product: Note;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    })

    this.productService.getProduct('noteID2').subscribe(product => {
      console.log(product);
      this.product = product;
    })
  }

}
