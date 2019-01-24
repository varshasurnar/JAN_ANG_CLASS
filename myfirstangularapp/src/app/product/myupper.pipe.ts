import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "myUpper",
})

export class MyPipe implements PipeTransform{
    transform(value: String, typev : String){
        value = value.toUpperCase();
        return value;
    }
}