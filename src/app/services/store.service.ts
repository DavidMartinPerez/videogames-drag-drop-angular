import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store //Objecto principal donde se guardará toda la información de la app
  constructor() {
    this.store = {
      pendientes : [
        'Celeste',
        'God of war',
        'Horizon Zero Dawn',
        'Heavy Run',
        'Detroit: Become Human',
        'Dark Souls Remaster',
        'Nioh',
        'Persona 5'
      ],
      deseados : [
        'Resident Evil 2 Remake',
        'Kingdom Hearts 3',
        'Metro Exodus'
      ]
    }
  }


  setStore(ob){
    Object.assign(this.store,ob)
  }

  getStore(){
    return this.store;
  }

  deleteStore(ob){
    ob.map( prop => {
        delete this.store[prop];
    })
}
}
