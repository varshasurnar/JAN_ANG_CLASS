
import {Component} from '@angular/core';
import {Employee} from '../model/employee.model';
import { NgForm } from '@angular/forms';
import {FormPosterService} from '../services/formPoster.service';

@Component ({
    selector : 'app-form',
    templateUrl : './customerForm.component.html',
})

export class CustomerFormsComponent {
    languages: any[] = ['Anglar', 'NodeJs', 'ReactJs','Java'];

    hasCodeLangError : Boolean = false;
    //use model
//model = new Employee('John', 'aa', 'a@s.com', '12345678', true, 'female', 'Angular');

    model = new Employee();
    constructor(private _FormPosterService : FormPosterService ){}

    validateCodeLang(event) : void {
        if(this.model.codelang === "default"){
            this.hasCodeLangError = true;
        }
        else{
            this.hasCodeLangError = false;
        }
    }

    formSubmit(form:NgForm) : void {
        console.log(form.value);
        this._FormPosterService.postEmployee(form.value)
            .subscribe((res) => console.log('post to server : ',res)); 
    }
}