import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';



@Component({
    selector: 'app-contents-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

        @Output() editEvent: EventEmitter<any> = new EventEmitter();
        @Output() closeEvent: EventEmitter<any> = new EventEmitter();
        @Input() title: string;

        constructor() {}

        ngOnInit(): void {}


        edit () {
            this.editEvent.emit();
        }

        close () {
            this.closeEvent.emit();
        }


}
