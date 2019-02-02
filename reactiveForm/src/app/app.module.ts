import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports : [], // only module can imoprt
    bootstrap : [
        AppComponent  // every first component should dispy in   bootstrap
    ],
    
    providers : []// only services to provide
})

export class AppModule {

}