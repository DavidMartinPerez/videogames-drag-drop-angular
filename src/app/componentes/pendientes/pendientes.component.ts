import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  videogames = [
    'Celeste',
    'God of war',
    'Horizon Zero Dawn',
    'Heavy Run',
    'Detroit: Become Human',
    'Dark Souls Remaster',
    'Nioh',
    'Persona 5'
  ];



  addGame(element){
    this.videogames.push(element.value)
  }

  updateList(list){
    this.videogames = list
    console.log(this.videogames)
  }
}
