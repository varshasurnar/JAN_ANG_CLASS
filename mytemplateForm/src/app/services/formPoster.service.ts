import { Injectable} from '@angular/core';
import {Employee} from '../model/employee.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class FormPosterService {

    constructor(private _httpClient : HttpClient){}
    name : String = "varsha";
   // id : number = 101
    postEmployee(employee: Employee): Observable<any>{
        console.log('Coming in service : ', employee);
        return this._httpClient.post('http://localhost:3100/postemployee', employee);  // for insert
       // return this._httpClient.delete('http://localhost:3100/postemployee', employee);  // for delete
       //return this._httpClient.patch('http://localhost:3100/postemployee', employee);  // for update    
    } 

    DeleteEmployee(employee : Employee) : Observable<any>{
        console.log('COming in service : ', employee);
        return this._httpClient.delete('http://localhost:3100/postemployee',name);
    }
}
/*****************Angular<7**********
 *
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
@Injectable()
export class FormPosterService {
    constructor( private http: Http) {}
    private extractData(res: Response) {
        const outres = res.json();
        return outres.fields || { };
    }
    postEmployee(employee: Employee): Observable <any> {
        // console.log('posting Data in service', employee);
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:3100/postEmployee', body, options)
            .pipe(map(this.extractData));
    }
}
 */
/*  .subscribe(data => {console.log('Post Data success', data)
                },
                error => {
                    console.log(error);
                } );*/