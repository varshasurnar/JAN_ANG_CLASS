import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';


@Component({
    templateUrl : './product_detail.component.html',
})

export class ProductDetailComponent implements OnInit{
    id : number;
    details : IProduct[];

    constructor(private _route : ActivatedRoute,
                private _prodServ : ProductService,
                private _router : Router){}
      
      ngOnInit(): void {
            this.id = this._route.snapshot.params['id'];
            this._prodServ.getProductDetail(this.id)
                .subscribe((data) => this.details = data);
        }

        OnBack() : void {
            this._router.navigate(['products']);
        }

    
}

/*
name : string;
    desc : string;
    imgUrl : string;
 this._route.queryParams.subscribe((data) => {this.name = data['pname'];
                                                    this.imgUrl = data['pimg'];
                                                    this.desc = data['pdesc']
                                            })
*/