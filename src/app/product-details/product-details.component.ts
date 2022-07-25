import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined; 

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {

    // Obtengo el product id de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Busco el producto que corresponde con el id proveido en la ruta
    this.product = products.find(product => product.id === productIdFromRoute); 

  }

}
