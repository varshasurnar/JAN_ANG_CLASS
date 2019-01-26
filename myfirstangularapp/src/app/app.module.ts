import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {BooksDetails} from './books.component';
import { ProductComponent } from './product/product.component';
import { MyPipe } from './product/myupper.pipe';
import { DIscountedPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productsearch.pipe';
import { StartComponent } from './shared/star.component';
import { ProductService } from './product/product.service';
import {ProductDetailComponent} from './product/product_detail.component';
import { OrderCromponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';

@NgModule ({
    //All tcoent and pipe
    declarations:[
        AppComponent,
        BooksDetails,
        ProductComponent,
        MyPipe,
        DIscountedPipe,
        ProductSearch,
        StartComponent,
        ProductDetailComponent,
        OrderCromponent,
        HomeComponent
    ],
    //All module
    imports: [
        BrowserModule,
        FormsModule
    ],

    //Only First component
    bootstrap: [
        AppComponent
    ],
    // All the services
    providers: [
        ProductService
    ]

})

export class AppModule{

}