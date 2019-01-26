import {Injectable} from '@angular/core';
import { IProduct } from './product.model';

@Injectable()

export class ProductService {
    getProducts() : IProduct []{
        return [
            {'_id':'5a05dacc734d1d68d42d31f3',
            'productId':1,
            'productName':'Leaf Rake',
            'price':18.95,
            'productCode':'GDN-0011',
            'releaseDate':'March 19, 2016',
            'description':'Leaf rake with 48-inch wooden handle.',
            'starRating':3.5,
            'imageUrl':'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {'_id':'5a05daec734d1d68d42d32ca',
            'productId':2,
            'productName':'Garden Cart',
            'price':29.99,
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
    }
}