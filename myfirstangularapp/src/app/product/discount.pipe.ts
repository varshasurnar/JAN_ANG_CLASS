import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "discount",
})

export class DIscountedPipe implements PipeTransform{
    transform(value: number, rate : number){
       // value = value-rate;
       value = value-5;
        return value;
    }
}