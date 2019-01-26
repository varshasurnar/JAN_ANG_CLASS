import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'app-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']

})

export class StartComponent implements OnChanges {
    starwidth : number;
    @Input() rating : number;
    @Output() ratingClicked : EventEmitter<String> = new EventEmitter<String>();
 
    ngOnChanges() : void {
        this.starwidth = this.rating * 86 / 6;
    }
   
    onStar() : void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
   
}