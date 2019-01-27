import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl : './product_detail.component.html',
})

export class ProductDetailComponent implements OnInit{
    name : string;
    desc : string;
    imgUrl : string;

    constructor(private _route : ActivatedRoute){}

    ngOnInit() : void {
        this._route.queryParams.subscribe((data) => {this.name = data['pname'];
                                                    this.imgUrl = data['pimg'];
                                                    this.desc = data['pdesc']
                                            })
    }
}