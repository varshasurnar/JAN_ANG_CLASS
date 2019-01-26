import { Injectable } from '@angular/core';
import { IProduct} from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {
    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _httpClient: HttpClient) {}
 // calling observable
    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl);
    }
    // calling promise
   /* getProduct() : Promise<IProduct[]> {
        return this._httpClient.get(this._productUrl).toPromise().then((res) => res.json);
    }*/

}