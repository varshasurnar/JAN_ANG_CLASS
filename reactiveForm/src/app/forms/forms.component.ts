import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms';

import {Employee} from './forms.model';

@Component ({
    selector : 'app-form',
    templateUrl : './forms.component.html'
})

export class FormsComponent {

    employeeForm : FormGroup ;
  // employee : Employee = new Employee();

    constructor(private fb : FormBuilder){}
//consuming model
    ngOnInit(): void {
        this.employeeForm = this.fb.group({
            firstName : ['Varsha'],
            lastName : ['Surnar']
        });
    }
    save() : void {
        console.log(this.employeeForm);
    }
}