
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerFormsComponent } from './customerForm/cusomerForm.component';
import {FormPosterService} from './services/formPoster.service';

@NgModule ({

    imports : [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],

    declarations : [
        AppComponent,
        CustomerFormsComponent
    ],

    bootstrap : [
        AppComponent
    ],

    providers : [
        FormPosterService
    ]
})

export class AppModule {

}