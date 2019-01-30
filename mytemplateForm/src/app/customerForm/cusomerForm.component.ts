
import {Component} from '@angular/core';
import {Employee} from '../model/employee.model';

@Component ({
    selector : 'app-form',
    templateUrl : './customerForm.component.html',
})

export class CustomerFormsComponent {
    languages: any[] = ['Anglar', 'NodeJs', 'ReactJs','Java'];

    //use model
    //model = new Employee('John', '', '', '', true, '', '');

    model = new Employee();
}