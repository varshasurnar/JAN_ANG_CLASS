import { Injectable} from '@angular/core';
import {Employee} from '../model/employee.model';
import {Observable} from 'rxjs';

@Injectable()

export class FormPosterService {
    postEmployee(employee: Employee): Observable<any>{
        console.log('Coming in service : ', employee);
    } 
}