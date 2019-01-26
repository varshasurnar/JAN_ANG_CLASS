import {Component,OnInit} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component ({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    //styles : ['thead{color:purple}','h4{color:gray}']
    styleUrls : ['./product.component.css']
})

export class ProductComponent implements OnInit{
    title: String ='Books List';
    valueEnter: String ;
    showTable : Boolean =true;
    showImg: Boolean = true;
    imageWidth : Number = 100;
    products: IProduct [] ;

    constructor(private _productservice : ProductService){}

    toggleImage(): void{
      // alert("CLicked");
      this.showImg = !this.showImg;
    }
    OnDataReceive(message: String){
        this.title = '*****Product List*****'+ message;
    }
    // initializatiom
    ngOnInit() : void{
        // object creation
        this.products = this._productservice.getProducts();
    }
}