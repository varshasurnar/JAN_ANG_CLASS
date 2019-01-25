import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BooksDetails} from './books.component';
import { ProductComponent } from './product/product.component';
import { MyPipe } from './product/myupper.pipe';
import { DIscountedPipe } from './product/discount.pipe';

@NgModule ({
    //All tcoent and pipe
    declarations:[
        AppComponent,
        BooksDetails,
        ProductComponent,
        MyPipe,
        DIscountedPipe
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
    providers: []

})

export class AppModule{

}