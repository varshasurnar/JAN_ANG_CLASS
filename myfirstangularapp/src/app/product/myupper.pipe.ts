import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "myUpper",
})

export class MyPipe implements PipeTransform{
    transform(value: String, typev : String){
        if(typev === 'upper'){
            value = value.toUpperCase();
        }else{
            value = value.toLowerCase();
        }
       
        return value;
    }
}