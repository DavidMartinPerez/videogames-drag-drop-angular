import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'dragdrop',
    templateUrl: './dragdrop.component.html',
    styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() list: any[]
    @Output() updateList = new EventEmitter();

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.list, event.previousIndex, event.currentIndex);
        this.updateListGames(this.list)
    }

    updateListGames(array){
        this.updateList.emit(array)
    }
}
