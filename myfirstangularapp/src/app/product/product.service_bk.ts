import {Injectable} from '@angular/core';
import { IProduct } from './product.model';
import{HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable()

export class ProductService {
    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails'
    
        constructor(private _httpClient : HttpClient){}
       
        getProducts() : Observable<IProduct[]> {
            return this._httpClient.get<IProduct[]>(this._productUrl);    // API call using    single line with methos(get),returntype(IProduct) and url(_productUrl)
        }
    }