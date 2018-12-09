import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //TODO: PETICIONES A FIREBASE
  constructor(private store:StoreService) { }


  getPendientes(){
    return this.store.getStore()["pendientes"]
  }

  updatePendientes(data){
    this.store.setStore({pendientes: data})
  }

  addPendiente(data){
    let list = this.store.getStore()["pendientes"];
    list.push(data)
    this.store.setStore({pendientes: list})
  }
}
