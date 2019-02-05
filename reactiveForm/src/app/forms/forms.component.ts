import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

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
            firstName : ['', [Validators.required, Validators.minLength(5)]],
            lastName :  ['', [Validators.required, Validators.maxLength(8)]],
            email :     ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')]],
            phone: ['']
        });
    }
    save() : void {
        console.log(this.employeeForm);
    }
    // populate data

    populateData() : void {
        this.employeeForm.patchValue({
            firstName : 'Varsha',
          //  lastName : 'Surnar',
            email : 'v@d.com'
        });
    }
    
}

/*
     populateData() : void {
        this.employeeForm.setValue({
            firstName : 'Varsha',
            lastName : 'Surnar',
            email : 'v@d.com'
        });
    }
*/