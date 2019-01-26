import {Component} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { IProduct } from './product.model';

@Component ({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    //styles : ['thead{color:purple}','h4{color:gray}']
    styleUrls : ['./product.component.css']
})

export class ProductComponent{
    title: String ='Books List';
    valueEnter: String ;
    showTable : Boolean =true;
    showImg: Boolean = true;
    imageWidth : Number = 100;
    products: IProduct [] = [
        {'_id':'5a05dacc734d1d68d42d31f3',
        'productId':1,
        'productName':'Leaf Rake',
        'price':19.95,
        'productCode':'GDN-0011',
        'releaseDate':'March 19, 2016',
        'description':'Leaf rake with 48-inch wooden handle.',
        'starRating':3.5,
        'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {'_id':'5a05daec734d1d68d42d32ca',
        'productId':2,
        'productName':'Garden Cart',
        'price':32.99,
        'productCode':'GDN-0023',
        'releaseDate':'March 18, 2016',
        'description':'15 gallon capacity rolling garden cart',
        'starRating':2.5,
        'imageUrl':'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {'_id':'5a05daec734d1d68d42d32ca',
        'productId':2,
        'productName':'Garden Cart',
        'price':32.99,
        'productCode':'GDN-0023',
        'releaseDate':'March 18, 2016',
        'description':'15 gallon capacity rolling garden cart',
        'starRating':1.7    ,
        'imageUrl':'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];
    toggleImage(): void{
      // alert("CLicked");
      this.showImg = !this.showImg;
    }
    OnDataReceive(message: String){
        this.title = '*****Product List*****'+ message;
    }
}