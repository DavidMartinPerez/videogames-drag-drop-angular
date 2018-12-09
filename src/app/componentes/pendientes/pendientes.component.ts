import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

  public videogames:any[]

  constructor(private http:HttpService) { }

  ngOnInit() {
    //Rescatamos los videojuegos
    this.videogames = this.http.getPendientes();
  }

  addGame(element){
    //Añadimos un elemento
    this.http.addPendiente(element)
  }

  updateList(list){
    //Actualizamos los puesto de la lista
    this.videogames = list
    this.http.updatePendientes(this.videogames)
  }
}
